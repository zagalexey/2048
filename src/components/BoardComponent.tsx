import React from 'react';

import '../styles/Board.css'
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import UnitComponent from "./UnitComponent";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    updateBoard: () => void
}

const BoardComponent = ({board, setBoard, updateBoard}: BoardProps) => {

    function onKeyPress(event: any): void {
        for (let i = 0; i < board.cells.length; i++) {
            for (let j = 0; j < board.cells.length; j++) {
                if (board.cells[i][j].isActive) {
                    board.moveCell(board.cells[i][j], event.key)
                }
            }
        }
        updateBoard()
    }

    document.addEventListener('keyup', (e) => onKeyPress(e))


    return (
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

    );
}

export default BoardComponent;