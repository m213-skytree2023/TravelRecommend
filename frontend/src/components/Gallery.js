import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="px-4 mt-4 border-bottom">
            <Row>
              <Col className="lg-3">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                </div>
              </Col>
              <Col className="lg-3">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                </div>
              </Col>
              <Col className="lg-3">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                </div>
              </Col>
              <Col className="lg-3">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                </div>
              </Col>
            </Row>
            <p></p>
          </div>
          <p></p>
        </Container>
      </>
    );
  }
}

export default Gallery;
