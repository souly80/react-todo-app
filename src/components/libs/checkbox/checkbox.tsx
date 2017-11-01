import * as React from "react";
import {CheckboxPropTypes} from "./checkbox-propTypes";
import './checkbox.style.css';

export class Checkbox extends React.Component<CheckboxPropTypes,any> {

    constructor(props: CheckboxPropTypes) {
        super(props)
        this.state = {isChecked:false};
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));
        handleCheckboxChange(this.state.isChecked);
    }

    render() {
        const { label } = this.props;

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={this.props.isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    {label}
                </label>
            </div>
        );
    }
}