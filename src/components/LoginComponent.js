import React, { useState } from "react";
import "./style.css";
import loginImg from "../login.svg";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from './FooterComponent';
import Navbar1 from './Navbar';
import UserView from './UserComponent';
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const login = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        history.push("/home");

        alert("Sucessfully Logged In");
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };

  return (
    <div>
    <Navbar1/>
<div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
                onChange={(event) => {
                setUsername(event.target.value);
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" 
                onChange={(event) => {
                setPassword(event.target.value);
              }}/>
            </div>
          </div>
        </div>

        <div className="footer">
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
          <h1 style={{ color: "red" }}>{errorMessage} </h1>
        </div>
      </div>
      <Footer/>
      </div>
  );
}

 

 export default Login;
