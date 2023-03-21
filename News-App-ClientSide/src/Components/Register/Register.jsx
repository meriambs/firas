import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { postContact } from "../../APIs/userApi";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//changement ici 
    const handleAdd = async (values) => {
        try {
        await postContact(values);
        navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
        <form >
              <div className="box">
            <label for="firstName" className="fl fontLabel"> First Name: </label>
                  <div className="new iconBox">
              <i className="fa fa-user"   ></i>
            </div>
                  <div className="fr">
                          <input type="text" name="firstName" placeholder="First Name"
                className="textBox" autofocus="on" required   value={name} onChange={(e)=>setName(e.target.value)}  />
                  </div>
                  <div className="clr"></div>
              </div>
  
  
              <div className="box">
            <label for="secondName" className="fl fontLabel"> Seconed Name: </label>
                  <div className="fl iconBox"><i className="fa fa-user"   ></i></div>
                  <div className="fr">
                          <input type="text" required name="secondName"
                placeholder="Last Name" className="textBox"  value={pseudo} onChange={(e)=>setPseudo(e.target.value)}   /> 
                  </div>
                  <div className="clr"></div>
              </div>
  
              <div className="box">
            <label for="phone" className="fl fontLabel"> address.: </label>
                  <div className="fl iconBox"><i className="fa fa-phone-square"   ></i></div>
                  <div className="fr">
                          <input type="text" required name="address" maxlength="10" placeholder="address No." className="textBox"  value={address}  onChange={(e)=>setAddress(e.target.value)}/>
                  </div>
                  <div className="clr"></div>
              </div>
  
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
                      <button type="Submit" name="Submit" className="submit" onClick={()=>handleAdd({name,pseudo,address,email,password})} >submit register </button>
              </div>
          
        </form>
    </div>
    );
}

export default Register

