import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

const Intro = (props) => {
    return (
      <>
        <Container>
          <div className="px-4 mt-4">
            <Row>
              <h4>
                {props.spot}<span className="font-weight-light"></span>
              </h4>
            </Row>
            <Row className="px-6">
              <p>
                {props.intro}
              </p>
            </Row>
          </div>
        </Container>
      </>
    );
}

export default Intro;
