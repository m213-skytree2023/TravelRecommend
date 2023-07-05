import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";

const Gallery = (props) => {
  return (
    <>
      <Container>
        <div className="px-4 mt-4 border-bottom">
          <Row>
            {props.pics.map((url)=>(
                          <Col className="lg-3">
                          <div className="px-4">
                            <img
                              alt="..."
                              className="rounded img-center img-fluid shadow shadow-lg--hover"
                              src={url}
                              style={{ width: "250px" }}
                            />
                          </div>
                        </Col>
            ))}
          </Row>
          <p></p>
        </div>
        <p></p>
      </Container>
    </>
  );
};

export default Gallery;
