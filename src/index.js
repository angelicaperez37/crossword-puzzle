import * as React from "react";
import * as ReactDOM from "react-dom";
import './css/index.css';
import { Square } from "./js/Square"

// function Square(props) {
//  return (
//         <input className="square" onClick={props.onClick} maxLength={1} onKeyDown={(e) => restrictCharacters(e)}>
//             {props.value}
//         </input>
//     );
// }

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(25).fill(null),
            solution: [
                'A', 'T', 'L', 'A', 'S',
                'C', 'R', 'U', 'S', 'H',
                'H', 'I', 'P', 'P', 'O',
                'I', 'C', 'I', 'E', 'R',
                'P', 'E', 'N', 'N', 'E'
            ],
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                </div>
                <div className="board-row">
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                </div>
            </div>
        );
    }
}

class CrosswordPuzzle extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <CrosswordPuzzle/>,
    document.getElementById('root')
);
