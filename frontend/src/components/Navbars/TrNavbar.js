import React from "react";
// reactstrap components
import {
  Form,
  Input,
  InputGroup,
  Container,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Button,
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
              <Form>
                <InputGroup>
                  <Input placeholder="Search" type="text" />
                  <Button
                    className="btn-icon btn-2"
                    color="secondary"
                    type="button"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-send" />
                    </span>
                  </Button>
                </InputGroup>
              </Form>
            </NavItem>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default TrNavbar;
