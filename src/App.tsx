import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";

import './App.css';
import {Board} from "./models/Board";

function App() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, [])

    useEffect(() => {
        window.addEventListener('keyup', onKeyPress, true)
        return () => {
            window.removeEventListener('keyup', onKeyPress)
        }
    })


    function restart() {
        console.log('restarting');
        const newBoard = new Board()
        newBoard.initCells()
        let randomX = Math.floor(Math.random() * 4)
        let randomY = Math.floor(Math.random() * 4)
        newBoard.cells[randomX][randomY].value = 2
        newBoard.cells[randomX][randomY].color = 'red'
        newBoard.cells[randomX][randomY].isActive = true
        setBoard(newBoard)
    }

    function updateBoard() {
        console.log('Updating board')
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    function onKeyPress(e: any): void {
        for (let i = 0; i < board.cells.length; i++) {
            for (let j = 0; j < board.cells.length; j++) {
                if (board.cells[i][j].isActive) {
                    board.moveCell(board.cells[i][j], e.key)
                }
            }
        }
        updateBoard()
    }


    return (
        <div className="App">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
            {/*<button onClick={onKeyPress}>Click</button>*/}
        </div>
    );
}

export default App;
