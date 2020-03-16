import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Button, ButtonToolbar, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import { Link as Move, animateScroll as scroll } from "react-scroll";





class NavbarC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }


  render() {
    return (

      <div id="here">













        <Navbar bg="" variant="dark" style={{ backgroundColor: "black" }} expand="md">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >

                <Link to="/about" style={{ color: "white" }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTV9Lf2TYi2J3s07bUMbLSuC3fW1ZhxaNn5-wpdQ7WefnevOp&s" style={{ width: "30px", height: "30px" }} alt="home" />
                </Link>

                <Link to="/skills" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Skills</div>
                </Link>

                <Link to="/projects" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Projects And Programs</div>
                </Link>


                <Link to="/education" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Education</div>
                </Link>

                <Link to="/Volunteering" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Volunteering</div>
                </Link>


                <Link to="/blog" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Blog</div>
                </Link>

                <Link to="/achievement" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Achievements</div>
                </Link>

                <Link to="/resume" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Resume</div>
                </Link>


                <Link to="/contact" style={{ color: "white" }}>
                  <div className="navanimation" style={{ color: "white" }}>Contact</div>
                </Link>


            </Nav>

          </Navbar.Collapse>
        </Navbar>







      </div>
    )
  }

}

export default NavbarC;