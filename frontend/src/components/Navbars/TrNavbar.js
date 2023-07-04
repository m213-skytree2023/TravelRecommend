import React from "react";

import Search from "../Search";
// reactstrap components
import {
  Container,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
} from "reactstrap";

class TrNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-dark bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
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
