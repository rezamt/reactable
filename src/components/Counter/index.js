import React, {Component} from 'react'


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {count: 0}
    }

    reset = () => {
        this.setState({count: 0})
    }

    increase = () => {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    componentDidMount() {
        this.handler = setInterval(
            () => this.increase(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.handler)
    }


    render() {
        return <div>{this.state.count} </div>
    }
}

export default Counter;