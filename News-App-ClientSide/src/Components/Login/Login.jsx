import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//cgangement ici 
    const handleLogin = async (values) => {
        try {
        const res = await axios.post(
            "http://localhost:5004/api/auth/login",
            values
        );
        await localStorage.setItem("token", res.data.token);
        navigate("/private");
        } catch (err) {
        console.log(err, "error login");
        }
    };

    return (
        <div className="container">
        <form >
           
              <div className="box">
            <label for="email" className="fl fontLabel"> Email ID: </label>
                  <div className="fl iconBox"><i className="fa fa-envelope"   ></i></div>
                  <div className="fr">
                          <input type="email" required name="email" placeholder="Email Id" className="textBox" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="clr"></div>
              </div>
          
              <div className="box">
            <label for="password" className="fl fontLabel"> Password </label>
                  <div className="fl iconBox"><i className="fa fa-key"   ></i></div>
                  <div className="fr">
                          <input type="Password" required name="password" placeholder="Password" className="textBox"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div className="clr"></div>
              </div>
              
              
          
              <div className="box terms">
                      <input type="checkbox" name="Terms" required /> &nbsp; I accept the terms and conditions
              </div>
              
              <div className="box" style={{background: "#2d3e3f"}}>
                      <button type="Submit" name="Submit" className="submit" onClick={()=>handleLogin({password,email}) } >submit login </button>
              </div>
          
        </form>
    </div>
        );
}

export default Login;