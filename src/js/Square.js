import { restrictCharacters } from "./util";
import * as React from "react";

export class Square extends React.Component {
    render() {
        return (
            <input className="square" onClick={this.props.onClick} maxLength={1} onKeyDown={(e) => restrictCharacters(e)}>
                {this.props.value}
            </input>
        );
    }
}