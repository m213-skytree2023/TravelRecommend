import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchStrContext } from "./providers/SearchStrProvider";

import {
  Form,
  Input,
  InputGroup,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const Search = () => {
  const navigate = useNavigate();

  const [inputStr, setInputStr] = useState("");

  const { searchStr, setSearchStr } = useContext(SearchStrContext);

  const searchChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setInputStr(value); // inputStrに検索欄に入力された値が格納される
  };

  const execSearch = () => {
    setSearchStr(inputStr);
    console.log(inputStr);
    navigate("/exec_search");
  };

  return (
    <>
      <Form onSubmit={execSearch}>
        <FormGroup>
          <InputGroup className="input-group mb-4">
            <Input
              placeholder="行きたい場所は"
              type="text"
              name="search"
              value={inputStr}
              onChange={searchChange}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <i className="ni ni-send" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </>
  );
};

export default Search;
