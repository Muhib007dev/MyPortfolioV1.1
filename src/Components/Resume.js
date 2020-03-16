import React, { Component } from "react";
import {MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarC from './Navbar.js';



class Resume extends Component {



render() {
    return (

        <div className="second-page" id="id-about"> 
            <NavbarC />
                        <h1>Resume</h1>
                        <h2>Link to resume</h2>
            <div className="sm">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
    
        </div>
    )
}

}

export default Resume;
