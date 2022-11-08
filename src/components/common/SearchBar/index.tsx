import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles.css';
import { searchAction } from "../../../store/TableReducer";

const SearchInput: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    dispatch(searchAction({ searchQuery: '' }));
  }

  const handleKeyDown: React.KeyboardEventHandler<any> | undefined = (e) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      dispatch(searchAction({ searchQuery: target.value }));
    }
  }

  return (
    <div className="SearchInputContainer">
        <Form.Control
            className="SearchControl"
            type="text"
            placeholder="Search..."
            onKeyDown={handleKeyDown}
        />
        <Button
          variant="primary"
          onClick={handleSearch}
        >
            Search
        </Button>
    </div>
  );
};

export default SearchInput;
