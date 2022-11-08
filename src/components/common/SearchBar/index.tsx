import React, { FunctionComponent } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles.css';

const SearchInput: FunctionComponent = () => {
  return (
    <div className="SearchInputContainer">
        <Form.Control
            className="SearchControl"
            type="text"
            placeholder="Search..."
        />
        <Button variant="primary">
            Search
        </Button>
    </div>
  );
};

export default SearchInput;
