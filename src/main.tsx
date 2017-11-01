import * as React from "react";
import {Menu} from "./components/menu/menu";
import {ToDo} from "./components/todo-view/todo";
import './main.css';
import {Footer} from "./components/footer/footer";
import {Filter} from "./components/filter/filter";

export interface MainProps {
    headertext: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Main extends React.Component<MainProps, any> {

    constructor(props: any) {
        super(props)
        this.onFilterChanged = this.onFilterChanged.bind(this)
        this.state = {filterDefaultValue: "all"};
    }

    onFilterChanged(selectedOption: string) {
        this.setState({filterDefaultValue: selectedOption});
        (this.refs.todo as any).updateTasks(selectedOption);
    }

    render() {
        return <div>
            <Menu  headerText={'ToDo List App!'}/>
            <ToDo ref="todo" filterValue={this.state.filterDefaultValue} />
            <Filter filterChanged={this.onFilterChanged}/>
            <Footer/>
        </div>;
    }
}