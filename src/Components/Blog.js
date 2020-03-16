import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarC from './Navbar.js';



class Blog extends Component {



    render() {
        return (

            <div className="second-page" id="id-about">
                <NavbarC />
                <h1>Blog</h1>
                1.>Future Software engg. <br />
                1.>Confidance is the key. <br />
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

export default Blog;
