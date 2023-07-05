import React from "react";

import Search from "../Search";
// reactstrap components
import { Container, NavbarBrand, Navbar, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";

class TrNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark bg-primary" expand="lg">
          <Container>

            <NavbarBrand href="#">
             旅行したいならおすすめ⭐
            </NavbarBrand>

          </Container>
          <Nav>
            <NavItem>
              <Search />
            </NavItem>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default TrNavbar;
