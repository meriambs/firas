import axios from "axios";

export const fetchAccounts = async () => {
    const { data } = await axios.get(`http://localhost:5004/account/user`);
    return data;
};

//get a single user
export const fetchAccount = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`http://localhost:5004/api/auth/uraccount`,{headers:{Authorization:token}} );
    return data;
};

export const postContact = async (values) => {
    const addingContact = await axios.post(`http://localhost:5004/api/auth/register`,{ ...values }
    );
};