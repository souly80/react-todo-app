import * as React from "react";
import {TaskView} from "../task-view/task-view";
import "./list-task.style.css"
    ;
export class ListTask extends React.Component<PropsListTask,any> {

    constructor(props: PropsListTask) {
        super(props)
        this.state = {taskList: this.props.taskList};
    }

    render() {
        return (
            <ul className="listTask">
                {this.props.taskList.map(function(task: Task){
                    return <li>
                            <TaskView isCompleted={task.isCompleted}  taskIsClosed={task.taskIsClosed} id={task.id} taskModeIsChanged={task.taskModeIsChanged} name={task.name}/>
                        </li>;
                })}
            </ul>)
    }
}

export interface PropsListTask {
    taskList: Array<Task>;
}

export interface Task {
    name: string;
    taskIsClosed: Function;
    id: number;
    taskModeIsChanged: Function;
    isCompleted: boolean;
}