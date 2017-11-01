import * as React from "react";
import * as PropTypes from "prop-types";

export interface PropsInputField {
    inputText: string;
    inserToDo(value:any): any;
}