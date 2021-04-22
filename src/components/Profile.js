import React, { Component, useState } from 'react';
import Axios from "axios";
import "./style.css";
import './Navbar.css';
import Footer from './FooterComponent';
import NavbarUser from './NavbarUser';
function Profile() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const profile = () => {
        Axios.get("http://localhost:3001/user/profile", {
        }).then((response) => {
        console.log(response);
        alert("Done");
        })
      };

      const updateprofile = (username) => {
          alert("Started");
        Axios.put("http://localhost:3001/user/updateprofile", {
          username: username,
          password: password
        }).then((response) => {
            console.log(response);
            alert("Done");
        })
    };
      
    
        return(
            <div>
                <NavbarUser/>
                <h1>Welcome</h1>
                <div>
   
                    <h2>Details</h2>
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Password</h3>
                    <h3>Mobile No.</h3>
                    <button type="button" className="btn" onClick={profile}>
                        profile
                    </button>
                </div>
                <div className="header">Update Details</div>
                <div className="content">
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

                <button type="button" className="btn" onClick={updateprofile(username)}> 
                    Update
                </button>


                <div>
                    <Footer/>
                </div>
            </div>
        
        )
    
}

export default Profile;