import * as React from "react";
import "./filter.css"
export  class Filter extends React.Component<FilterPropTypes,any> {

    constructor(props: any) {
        super(props)
        this.state = {selectedOption: "all"};
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent: any) {
        this.setState({
            selectedOption: changeEvent.target.value
        });
        this.props.filterChanged(changeEvent.target.value);
    }

    render() {
        return <div className="filter">
            <input checked={this.state.selectedOption === 'all'}
                   onChange={this.handleOptionChange} type="radio" value="all"/>
            <label >All</label>
            <input  checked={this.state.selectedOption === 'active'}
                    onChange={this.handleOptionChange} type="radio" value="active" />
            <label >Active</label>
            <input  checked={this.state.selectedOption === 'completed'}
                    onChange={this.handleOptionChange} type="radio" value="completed" />
            <label >Completed</label>
        </div>
    }
}

export interface FilterPropTypes {
    filterChanged: any;
    //defautValue: string;
}