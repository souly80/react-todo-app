import * as React from "react";
import './styles.css';

export interface MenuProps {
    headerText: string;
}

export class Menu extends React.Component<MenuProps,any> {

    render() {
        return <div className='menuTitle' >{this.props.headerText}</div>
    }
}