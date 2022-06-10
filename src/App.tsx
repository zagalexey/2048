import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";

import './App.css';
import {Board} from "./models/Board";
import {Unit} from "./models/Unit";

function App() {
    const [board, setBoard] = useState(new Board())

    let unitArr: object[] = []

    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        setBoard(newBoard)
    }
        console.log(board)

    function addUnit() {
        let randomX: number = Math.floor(Math.random() * 4)
        let randomY: number = Math.floor(Math.random() * 4)
        let newUnit = new Unit(randomX, randomY, 2)
        unitArr.push(newUnit)
        console.log(unitArr);
    }

    return (
        <div className="App">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
            <button onClick={addUnit}>Add Unit</button>
        </div>
    );
}

export default App;
