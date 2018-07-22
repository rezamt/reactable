import React from "react";
import Checkbox from "../Checkbox";


class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input value="Search ..."/>
                <Checkbox label={ "Only show products in stock"} />
            </div>
        );
    }
}


export default SearchBar;