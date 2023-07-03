import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

class Intro extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="px-4 mt-4">
            <Row>
              <h4>
                Jessica Jones <span className="font-weight-light"></span>
              </h4>
            </Row>
            <Row className="px-6">
              <p>
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Intro;
