import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchBar() {
    return (
        <InputGroup>
            <FormControl value="Star Wars" aria-describedby="search-bar" />
            <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SearchBar;
