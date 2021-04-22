import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import './Navbar.css';
import Login from './LoginComponent';
import Footer from './FooterComponent';
import NavbarUser from './NavbarUser';
import Axios from "axios";

const UserView = (props) => {
  return (
    <div>
        <NavbarUser/>
            <div>
            <h1>Hello {props.username}</h1>
            </div>
        <Footer/>
      </div>
  );
};


export default UserView;
