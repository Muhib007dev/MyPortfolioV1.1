import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarC from './Navbar.js';



class Contact extends Component {



    render() {
        return (

            <div className="second-page" id="id-about">
                <NavbarC />
                <h1>Contact</h1>
                1.>linkedIn <br />
                2.>GitHub <br />
                3.>Insta <br />
                4.>FB <br />
                5.>Twitter <br />
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

export default Contact;
