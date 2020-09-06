import React from 'react';
/*import { connect } from 'react-redux';
import * as actions from '../actions/index.js';*/
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/logo.png';
import playMarketIcon from '../img/google-play-computer-icons.jpg';
import appStore from '../img/app-store-icon-logo.png';

export default class NavBar extends React.Component {
  render() {
    const iconStyle = {
      width: 120 + 'px',
      height: 35 + 'px',
      marginRight: 20 + 'px',
    }; 

    return (
      <div id="bgNavs">
        <Navbar id="navsPanel" fixed="top">
          <Navbar.Brand href="#" className="brandNav" style={{color: 'white'}}>
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Kallyas
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Platform</Nav.Link>
              <Nav.Link href="#">Facilities</Nav.Link>
              <Nav.Link href="#">Plans</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navTextWithAppLinks">
          <div>
            <h3>Increase Your</h3>
            <h3>Social Media Presence</h3>
          </div>
          <div>
            <p style={{fontSize: 13 + 'px'}}>
              One of the most used Social Media Management Platform wich have a offer
              with 25% DISCOUNT for all services in week-ends.
            </p>
          </div>
          <div className="buttonLinks">
            <a href="#"><img style={iconStyle} src={playMarketIcon}></img></a>
            <a href="#"><img style={iconStyle} src={appStore}></img></a>
          </div>
        </div>
      </div>
    );
  }
}
