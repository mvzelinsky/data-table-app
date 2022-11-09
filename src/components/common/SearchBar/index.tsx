import React, { FunctionComponent, useRef } from "react";
import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './styles.css';
import { searchAction } from "../../../store/TableReducer";

const SearchInput: FunctionComponent = () => {
  const dispatch = useDispatch();

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch(searchAction({ searchQuery: inputRef.current.value }));
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
            ref={inputRef}
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
