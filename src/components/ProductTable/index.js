// ProductTable
//  - ProductCategoryRow
//  - ProductRow

import React from "react";


class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
      </span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}


class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let lastCategory = null;
        let rows = [];

        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            );
            lastCategory = product.category;
        });


        return (

            <table>
                <thead>
                <th>
                    <td>Name</td>
                    <td>Price</td>
                </th>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>

        );

    }

}

export default ProductTable;