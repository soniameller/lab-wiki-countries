import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class MainNavbar extends Component {



  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">WikiCountries</Navbar.Brand>
      </Navbar>
    );
  }
}
