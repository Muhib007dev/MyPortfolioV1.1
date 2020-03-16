import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView } from "mdbreact";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstPage from "./Components/FirstPage.js";
import SecondPage from "./Components/SecondPage.js";
import MainPage from "./Components/MainPage.js";
import Blog from "./Components/Blog.js";
import Volunteering from "./Components/Volunteering.js";
import Resume from "./Components/Resume.js";
import Education from "./Components/Education.js";
import Contact from "./Components/Contact.js";
import Achievement from "./Components/Achievement.js";



import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


class App extends Component {
  render() {
    return (
      <div>

        <Router>



          <Route render={({ location }) => (

            <TransitionGroup>



              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="item"
              >



                <Switch location={location}>
                  <Route path="/" exact component={MainPage} />
                  <Route path="/about" exact component={MainPage} />
                  <Route path="/skills" component={FirstPage} />
                  <Route path="/home" exact component={MainPage} />
                  <Route path="/projects" component={SecondPage} />
                  <Route path="/education" component={Education} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/volunteering" component={Volunteering} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/achievement" component={Achievement} />
                  <Route path="/contact" component={Contact} />
                </Switch>


              </CSSTransition>

            </TransitionGroup>

          )} />

        </Router>


      </div>
    );
  }
}

export default App;
