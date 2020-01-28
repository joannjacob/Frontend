import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
// import { Button, Nav, Form, FormControl } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeNavbar.css";

export class HomeNavbar extends Component {
  render() {
    return (
      //   <div>
      //     <Navbar bg="dark" variant="dark">
      //       <Navbar.Brand href="#home">SHOPPING CART</Navbar.Brand>
      //       <Nav className="mr-auto"></Nav>
      //       <Form inline>
      //         {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      //         <Nav.Link href="/">Home</Nav.Link>
      //         <Nav.Link href="/cart">Features</Nav.Link>
      //       </Form>
      //     </Navbar>
      //     <br />
      //   </div>

      <div className="homeheader">
        <a href="#default" class="logo">
          SHOPPING CART
        </a>
        <div className="homeheader-right">
          {/* <a className="active" href="/">
            Home
          </a> */}
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
