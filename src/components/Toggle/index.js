import React, {Component} from 'react'

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}
    }


    click = (id, e) => {
        console.log(`this is id: ${id}`);
        this.setState(
            prevState => ({
                isToggleOn: !prevState.isToggleOn
            })
        );
    }

    render() {
        return <button onClick={ (e) => this.click(1, e)}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    }

}


export default Toggle;