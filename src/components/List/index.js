import React, {Component} from 'react'


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {numbers: props.numbers};
    }


    onClick = (id, e) => {
        e.preventDefault(); // We don't want the href gets fired.
        console.log(id);
    }

    render() {

        const items = this.state.numbers;

/*
        // no return needed
        const rendered = items.map((n) =>
            <li key={n.toString()} onClick={(e) => this.onClick(n, e)}><a href="#">Item {n}</a></li>
        );
*/


        const rendered = items.map((n) =>{
            return <li key={n.toString()} onClick={(e) => this.onClick(n, e)}><a href="">Item {n}</a></li>;
            }
        );

        return <ul>{rendered}</ul>;

    }

}

export default List;