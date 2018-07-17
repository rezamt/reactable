import React, {Component} from 'react';


class Time extends Component {

    constructor(props) {
        super(props);
        this.state = { prefix: props.prefix, date: new Date()}
    }


    tick = () => {
        this.setState({date: new Date()})
    }

    componentDidMount() {
        this.handler = setInterval(() => this.tick(), 1000)
    }


    componentWillUnmount() {
        clearInterval(this.handler)
    }

    render() {
        return (
            <div>{this.state.prefix}{this.state.date.toLocaleTimeString()} </div>
        )
    }

}

export default Time;