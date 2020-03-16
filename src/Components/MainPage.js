import React, { Component } from "react";
import {MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";

import proPic1 from ".././pro-pic1.jpeg";
import images1 from ".././images1.png";
import { Button, ButtonToolbar, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import NavbarC from './Navbar.js';

class MainPage extends Component {

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

        <div >


<div className="main-page">
                <div className="card middle">
                    <div className="front" >
                        <img src={images1} alt="not available" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <button className="button" style={{color:"white",fontFamily:"verdana"}}>  Click  </button>
                        <br />
                        <br />      
                        <br />
         
                    </div>
                    <div className="back">
                        <div className="back-content middle">
                            <img className="pro-pic" src={proPic1} alt="not available" />
                            <h2  style={{color: "white", marginTop:"25px", marginBottom:"25px",fontFamily:"verdana"}}>Muhib Shaikh</h2>

                            <span  style={{color: "white"}}>Self-taught Developer</span>
          
                        
                           <Link activeClass="active" to="id-about" spy={true} smooth={true} offset={-0} duration={10}>  <br />  <button  className="buttonBack" ><b> Here </b></button> </Link>
                    
                    


                    

                    
                        </div>


                </div>

            </div>

        </div>
       


        <div className="second-page" id="id-about"> 
            
                  <NavbarC />
                <div className="aboutcontent">
                        <h1>About</h1>
                        <p>Hello World, My name is Muhib Shaikh. I am pursuing Engg from pune university. In this portfolio I have uploaded everything that I have done and What I know.</p>
                        <p>I made this portfolio for the tanays job challenge. My journey of web development is started after I started following Tanay on instagram, Watched some videos on his youtube channel.</p>
                </div>
    
        </div>
       
            
        </div>
    )
}

}

export default MainPage;