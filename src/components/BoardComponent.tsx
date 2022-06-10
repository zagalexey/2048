import React from 'react';

import '../styles/Board.css'
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import UnitComponent from "./UnitComponent";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent = ({board, setBoard}: BoardProps) => {

    return (
        <div className={'board'}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent key={cell.id}/>
                    )}
                </React.Fragment>
            )}
            <UnitComponent />
            <UnitComponent />
        </div>

    );
}

export default BoardComponent;