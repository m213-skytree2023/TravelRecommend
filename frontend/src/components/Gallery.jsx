import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";

const Gallery = (props) => {
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
                  src={props.pics[0]}
                  style={{ width: "200px" }}
                />
              </div>
            </Col>
            <Col className="lg-3">
              <div className="px-4">
                <img
                  alt="..."
                  className="rounded img-center img-fluid shadow shadow-lg--hover"
                  src={props.pics[1]}
                  style={{ width: "200px" }}
                />
              </div>
            </Col>
            <Col className="lg-3">
              <div className="px-4">
                <img
                  alt="..."
                  className="rounded img-center img-fluid shadow shadow-lg--hover"
                  src={props.pics[2]}
                  style={{ width: "200px" }}
                />
              </div>
            </Col>
            <Col className="lg-3">
              <div className="px-4">
                <img
                  alt="..."
                  className="rounded img-center img-fluid shadow shadow-lg--hover"
                  src={props.pics[3]}
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
};

export default Gallery;
