import React from 'react';

import '../styles/Board.css'
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";

interface BoardProps {
    board: Board | null
}

const BoardComponent = ({board}: BoardProps) => {

    return (
        <div>
            <div className={'board'}>
                {board?.cells.map((row, index) =>
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
        </div>

    );
}

export default BoardComponent;