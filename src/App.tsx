import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";

import './App.css';
import {Board} from "./models/Board";
import {Unit} from "./models/Unit";
import {Cell} from "./models/Cell";

function App() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, [])

    function updateBoard() {
        console.log('Updating board')
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    function restart() {
        console.log('Restarting')
        const newBoard = new Board()
        newBoard.initCells()
        let randomX = Math.floor(Math.random() * 4)
        let randomY = Math.floor(Math.random() * 4)
        newBoard.cells[randomX][randomY].value = 2
        newBoard.cells[randomX][randomY].color = 'red'
        newBoard.cells[randomX][randomY].isActive = true
        setBoard(newBoard)
    }

    return (
        <div className="App">
            <BoardComponent
                board={board}
                setBoard={setBoard}
                updateBoard={updateBoard}
            />
            {/*<button>Add Unit</button>*/}
            {/*<button onClick={restart}>Reset Board</button>*/}
        </div>
    );
}

export default App;
