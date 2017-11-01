import * as React from "react";
import {InputField} from "../libs/input/input-field";
import {ListTask, Task} from "../list-task/list-task";
import "./todo-view.style.css"

export  class ToDo extends React.Component<any,any> {
    private tasks: Array<Task> = [];

    constructor(props: any){
        super(props)
        this.state = {
            viewTasks: [],
            filterValue: this.props.filterValue
        };
        this.addTask = this.addTask.bind(this);
        this.taskIsClosed = this.taskIsClosed.bind(this);
        this.updateTasks = this.updateTasks.bind(this);
        this.taskIsCompleted = this.taskIsCompleted.bind(this);
    }

    taskIsClosed(id: number) {
        let newTasks = this.state.viewTasks.filter((task: Task) => {
            return task.id !== id
        });
        this.setState({viewTasks: newTasks});
        this.tasks = newTasks;
    }

    taskIsCompleted(isChecked: boolean, id: number) {
        this.tasks.map((task: Task) => {
            if(task.id === id)
                task.isCompleted = !isChecked;
        });
        this.updateTasks();
    }

    addTask(value:any){
        this.tasks.push({
            name:value,
            taskIsClosed:this.taskIsClosed,
            id: this.state.viewTasks.length,
            taskModeIsChanged: this.taskIsCompleted,
            isCompleted: false
        } as Task);
        this.updateTasks();
    }

    public updateTasks(filterValue?: string) {
        if(filterValue)
            this.setState({filterValue: filterValue});
        else
            filterValue = this.state.filterValue;
        if(filterValue === "all")
            this.setState({viewTasks: this.tasks});
        else if(filterValue === "active") {
            let activeTasks = this.tasks.filter((task: Task) => {
                return task.isCompleted === false;
            });
            this.setState({viewTasks: activeTasks});
        }
        else if(filterValue === "completed") {
            let completedTasks = this.tasks.filter((task: Task) => {
                return task.isCompleted === true;
            });
            this.setState({viewTasks: completedTasks});
        }
    }

    render() {
        return <div className="todoapp">
            <InputField inserToDo={this.addTask} />
            <ListTask taskList={this.state.viewTasks}/>
        </div>
    }
}