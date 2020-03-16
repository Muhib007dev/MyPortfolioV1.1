import React, { Component } from "react";
import {MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarC from './Navbar.js';




class FirstPage extends Component {



render() {
    return (

        <div id="first-page"> 
            <NavbarC />
            <h1 style={{textDecoration:"underline", padding:"15px"}}> My Skills</h1>
            
              <div className="container">
        <ul>
            <li className="java">CORE-JAVA</li>
            <li className="a-java">ADVANCED JAVA</li>
            <li className="android">ANDROID APP DEVELOPMENT</li>
            <li className="html">HTML5</li>
            <li className="css3">CSS3</li>
            <li className="bootstrap">BOOTSTRAP</li>
            <li className="js">JavaScript</li>
            <li className="rs">React.js</li>
            <li className="mysql">MySQL</li>
            <li className="f-base">FIREBASE</li>
            <li className="git">GIT</li>
        </ul>
    </div>
        

        </div>
    )
}

}

export default FirstPage;