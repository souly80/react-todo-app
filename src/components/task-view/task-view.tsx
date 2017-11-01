import * as React from "react";
import {Checkbox} from "../libs/checkbox/checkbox";
import './task-view.style.css';

export class TaskView extends React.Component<TaskViewPropTypes,any> {
    private iconClosePath = require("../../assets/icons/close.png");

    constructor(props: any) {
        super(props)
        this.state = {textAreaClass: this.props.isCompleted? "textStrike":"center"};
        this.onCheckboxChanged = this.onCheckboxChanged.bind(this);
    }

    onCheckboxChanged(isChecked: boolean) {
        if(isChecked)
            this.setState({textAreaClass:"center"});
        else
            this.setState({textAreaClass:"textStrike"});
        this.props.taskModeIsChanged(isChecked, this.props.id);
    }

    render() {
        return <div className="box">
            <div className="left">
                <Checkbox isChecked={this.props.isCompleted} label="" handleCheckboxChange={this.onCheckboxChanged}/>
            </div>
            <div>
                <textarea className={this.props.isCompleted? "textStrike":"center"} value={this.props.name}></textarea>
            </div>
            <div className="right">
                <img onClick={()=>this.props.taskIsClosed(this.props.id)} src={this.iconClosePath} className="closeImg"/>
            </div>
        </div>
    }
}

export interface TaskViewPropTypes {
    taskIsClosed: Function;
    id: number;
    name: string;
    taskModeIsChanged: Function;
    isCompleted: boolean;
}