import React from 'react'

import SearchBar from "../SearchBar"
import ProductTable from "../ProductTable"


class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {products: props.products}
    }


    render() {

        return (
            <div>
                <SearchBar/>
                <ProductTable products={this.state.products}/>
            </div>
        );
    }

}

export default FilterableProductTable;