import React, { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import { SearchStrContext } from "./providers/SearchStrProvider";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Button,
} from "reactstrap";

const Screen = () => {

  const navigate = useNavigate();

  const [ inputStr, setInputStr ] = useState("");

  const {searchStr, setSearchStr} = useContext(SearchStrContext);

  const searchChange = ( e: ChangeEvent ) => {
    const { name, value } = e.target;
    setInputStr(value); // inputStrに検索欄に入力された値が格納される
  }

  const execSearch = () =>{
    setSearchStr(inputStr);
    console.log(inputStr);
    navigate('/exec_search');
  }

  return (
    <>
      <main className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <div className="text-center mt-5">
                  <h3>
                    どこに旅行に行きたい？
                    <span className="font-weight-light"></span>
                  </h3>
                </div>
                <p> </p>
                <div className="text-center">
                  <Form>
                    <FormGroup>
                      <InputGroup className="input-group mb-4">
                        <Input
                          placeholder="行きたい場所は"
                          type="text"
                          name="search"
                          value={inputStr}
                          onChange={searchChange}
                        />
                        <Button
                          className="btn-icon btn-2"
                          color="secondary"
                          type="button"
                          onClick={execSearch}
                        >
                          <span className="btn-inner--icon">
                            <i className="ni ni-send" />
                          </span>
                        </Button>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
                        An artist of considerable range, Ryan — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Screen;
