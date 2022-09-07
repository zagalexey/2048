import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";

import {ScoreContext} from "./ScoreContext";

import './App.css';
import {Board} from "./models/Board";
import Header from "./components/Header";
import {colors} from "./colors";


function App() {

    const [board, setBoard] = useState<Board>(restart())
    const [score, setScore] = useState(0)


    useEffect(() => {
        window.addEventListener('keyup', onKeyPress)
        return () => {
            window.removeEventListener('keyup', onKeyPress)
        }
    }, [board])

    function restart(): Board {
        const newBoard = new Board()
        newBoard.initCells()
        let randomX = Math.floor(Math.random() * 4)
        let randomY = Math.floor(Math.random() * 4)
        const startValue = colors[0].value
        const startColor = colors[0].color
        newBoard.cells[randomX][randomY].value = startValue
        newBoard.cells[randomX][randomY].color = startColor
        newBoard.cells[randomX][randomY].isActive = true
        newBoard.cells[randomX][randomY].available = false
        return newBoard
    }

    function reset(): void {
        const newBoard: Board = restart()
        setBoard(newBoard)
        setScore(0)
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard(board)
        setBoard(newBoard)
    }

    function checkForColors(board: Board): void {
        const actualBoard = board.getCopyBoard(board)
        for (let i = 0; i < actualBoard.cells.length; i++) {
            const row = actualBoard.cells
            for (let j = 0; j < row.length; j++) {
                const cellValue = actualBoard.cells[i][j].value
                colors.forEach(item => {
                    if (cellValue === item.value) {
                        actualBoard.cells[i][j].color = item.color
                    }
                })
            }
        }
    }

    function onKeyPress(e: any): void {
        if(e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            board.onKeyHandler(e.key)
            console.log('combined values: ', board.onCombineValues)
            const combinedValues = board.getCombinedValues()
            if(combinedValues.length > 0) {
                let newScore: number = 0

                for (let i = 0; i < combinedValues.length; i++) {
                    newScore += combinedValues[i]
                }
                setScore(newScore)
            }
            checkForColors(board)
            board.addNewCell()
            updateBoard()
        }
    }


    return (

        <div className="App">
            <ScoreContext.Provider value={score}>
                <Header reset={reset}/>
                <BoardComponent
                    board={board}
                />
            </ScoreContext.Provider>
        </div>

    );
}

export default App;
