import React from 'react'


class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    toggleCheckboxChange = () => {
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked
        }));
    }

    render() {
        const {label} = this.props;
        const {isChecked} = this.state;

        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />

                    {label}
                </label>
            </div>
        );
    }
}

export default Checkbox;