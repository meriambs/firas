import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchAccount } from "../APIs/userApi";
import { setAccount } from "../Store/accountSlice";
import Login from "./Login/Login";

const PrivateRoute = () => {
    //data from redux
    const account = useSelector((state) => state.account);
            console.log("userof the private ", account);
    //navigation
    const navigate = useNavigate();
    //dispatching
    const dispatch = useDispatch();
    //data from db to redux
    const getAuth = async () => {
        const data = await fetchAccount();
        console.log("data",data)
        dispatch(setAccount(data));
    };

    useEffect(() => {
        getAuth();
    }, []);

    //logout
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const token = localStorage.getItem("token");
    console.log(token);

    return (
        
        <div>
        {token ? (
            <>
            <Button onClick={() => logout()}>Logout</Button>
            <div>
                <h1>hello and welcome {account.name} </h1>
            </div>
            </>
        ) : (
            <Login />
        )}
        </div>
    );
};

export default PrivateRoute;

    {/*<>
    <NavContainer auth={auth} logout={logout} />
    {auth.role === "admin" ? (
        <AdminCompo auth={auth} />
    ) : (
        <UserCompo auth={auth} />
    )}
    </>;*/}