import * as React from "react";
import "./input-field.css"

export  class InputField extends React.Component<any,any> {

    private taskText: string;
    constructor(props: any) {
        super(props)
        this.state = {textValue: ""};
        this.handleKeypress = this.handleKeypress.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    handleKeypress(e: any) {
        if(e.key === 'Enter') {
            if(!e.target.value) return;
            this.props.inserToDo(e.target.value);
            this.setState({textValue : ""});
        }
    }

    changeText(event: any) {
        this.setState({textValue : event.target.value});
        if(event.target.value === "Enter")
            this.props.inserToDo(event.target.value);
    }


    render() {
        var {inputText} = this.props;
        return <div>
            <input placeholder="what needs to be done?" className='inputStyle' type="text" value={this.state.textValue} onChange = {this.changeText} onKeyDown={this.handleKeypress}>
            </input>
        </div>
    }
}