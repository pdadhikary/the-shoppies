import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./SearchBar";

function Shoppies() {
    return <SearchBar></SearchBar>;
}

ReactDom.render(<Shoppies />, document.getElementById("root"));
