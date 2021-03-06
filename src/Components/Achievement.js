import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarC from './Navbar.js';



class Achievement extends Component {



    render() {
        return (

            <div className="second-page" id="id-about">
                <NavbarC />
                <h1>Achievement</h1>
                1.>gcp certificates <br />
                2.>google cloud hoodie<br />
                3.>session on jdbc <br />
                4.>clearing out my backlogs <br />

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

export default Achievement;
