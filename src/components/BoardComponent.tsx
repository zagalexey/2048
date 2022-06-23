import React, {useEffect} from 'react';

import '../styles/Board.css'
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import UnitComponent from "./UnitComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent = ({board, setBoard,}: BoardProps) => {

    // console.log(`Board from boardComponent: ${board.cells}`)

    // useEffect(() => {
    //
    // }, [])

    // function onKeyPress(e: any): void {
    //     console.log(board.cells);
    //     for (let i = 0; i < board.cells.length; i++) {
    //         for (let j = 0; j < board.cells.length; j++) {
    //             if (board.cells[i][j].isActive) {
    //                 board.moveCell(board.cells[i][j], e.key)
    //                 console.log('Clicked')
    //             }
    //         }
    //     }
    //     // updateBoard()
    // }

    // function updateBoard() {
    //     console.log('Updating board')
    //     const newBoard = board.getCopyBoard()
    //     setBoard(newBoard)
    // }

    return (
        <div>
            <div className={'board'}>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                key={cell.id}
                                value={cell.value}
                                color={cell.color}/>
                        )}
                    </React.Fragment>
                )}
            </div>
            {/*<button onClick={() => {onKeyPress('ArrowLeft')}}>LEFT</button>*/}
            {/*<button onClick={() => {onKeyPress('ArrowUp')}}>UP</button>*/}
            {/*<button onClick={() => {onKeyPress('ArrowDown')}}>DOWN</button>*/}
            {/*<button onClick={() => {onKeyPress('ArrowRight')}}>RIGHT</button>*/}
        </div>

    );
}

export default BoardComponent;