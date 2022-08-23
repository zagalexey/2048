import {Cell} from "./Cell";

import {colors} from "../colors";

export class Board {
    cells: Cell[][] = []
    onCombineValues: number[] = []

    onKeyHandler(key: string): void {
        switch (key) {
            case 'ArrowLeft':
                for (let i = 0; i < this.cells.length; i++) {
                    let row = this.cells[i]
                    let combinedArr = this.checkForCombine(row)
                    if(combinedArr) {
                        for (let j = 0; j < combinedArr.length; j++) {
                            this.combine(combinedArr[j])
                        }
                    }
                    const freeCells: number[] = []
                    for (let j = 0; j < row.length; j++) {
                        if (row[j].isActive) {
                            if (freeCells.length !== 0) {
                                this.switchCells(row[j], row[freeCells[0]])
                                freeCells.push(j)
                                freeCells.shift()
                            }
                        } else {
                            freeCells.push(j)
                        }
                    }
                }
                break
            case 'ArrowRight':
                for (let i = 0; i < this.cells.length; i++) {
                    let row = this.cells[i]
                    let combinedArr = this.checkForCombine(row)
                    if(combinedArr) {
                        for (let j = 0; j < combinedArr.length; j++) {
                            this.combine(combinedArr[j])
                        }
                    }
                    const freeCells: number[] = []
                    for (let j = row.length - 1; j >= 0; j--) {
                        if (row[j].isActive) {
                            if (freeCells.length !== 0) {
                                this.switchCells(row[j], row[freeCells[0]])
                                freeCells.push(j)
                                freeCells.shift()
                            }
                        } else {
                            freeCells.push(j)
                        }
                    }
                }
                break
            case 'ArrowUp': {
                let xCord = 0
                for (let i = 0; i < 4; i++) {
                    let col: Cell[] = []
                    for (let j = 0; j < 4; j++) {
                        col.push(this.cells[j][xCord])
                    }
                    let combinedArr = this.checkForCombine(col)
                    if(combinedArr) {
                        for (let j = 0; j < combinedArr.length; j++) {
                            this.combine(combinedArr[j])
                        }
                    }
                    const freeCells: number[] = []
                    for (let j = 0; j < col.length; j++) {
                        if (col[j].isActive) {
                            if (freeCells.length !== 0) {
                                this.switchCells(col[j], col[freeCells[0]])
                                freeCells.push(j)
                                freeCells.shift()
                            }
                        } else {
                            freeCells.push(j)
                        }
                    }
                    xCord++
                }
            }
                break
            case 'ArrowDown': {
                let xCord = 0
                for (let i = 0; i < 4; i++) {
                    let col: Cell[] = []
                    for (let j = 0; j < 4; j++) {
                        col.push(this.cells[j][xCord])
                    }
                    col = col.reverse()
                    let combinedArr = this.checkForCombine(col)
                    if(combinedArr) {
                        for (let j = 0; j < combinedArr.length; j++) {
                            this.combine(combinedArr[j])
                        }
                    }
                    const freeCells: number[] = []
                    let arr: Cell[] = []
                    for (let j = 0; j < 4; j++) {
                        arr.push(this.cells[j][xCord])
                    }
                    for (let j = arr.length - 1; j >= 0; j--) {
                        if (arr[j].isActive) {
                            if (freeCells.length !== 0) {
                                this.switchCells(arr[j], arr[freeCells[0]])
                                freeCells.push(j)
                                freeCells.shift()
                            }
                        } else {
                            freeCells.push(j)
                        }
                    }
                    xCord++
                }
            }
                break
            default:
                break
        }
    }

    checkForCombine(cellArray: Cell[]): Cell[][] {
        let resultArr: Cell[][] = []
        let pairArray: Cell[] = []
        for (let i = 0; i < cellArray.length; i++) {
            if(pairArray.length === 2) {
                if(pairArray[0].value === pairArray[1].value && pairArray[0].value !== null && pairArray[1].value !== null) {
                    resultArr = [[...pairArray]]
                    for (let j = 0; j < 2; j++) {
                        pairArray.pop()
                    }
                    pairArray.push(cellArray[i])
                    continue
                }else {
                    pairArray.shift()
                }
            }

           if(cellArray[i].value && pairArray.length < 2) {
               pairArray.push(cellArray[i])
           }
        }
        if(pairArray.length === 2) {
            if(pairArray[0].value === pairArray[1].value) {
                resultArr.push(pairArray)
            }
        }
        return resultArr
    }

    getCombinedValues(): number[]{
        return this.onCombineValues
    }

    combine(cellPair: Cell[]): void {
        let firstCell = cellPair[0]
        let secondCell = cellPair[1]
        let combinedValue: number = 0
        if(firstCell.value && secondCell.value) {
            combinedValue = firstCell!.value + secondCell!.value
        }
        this.onCombineValues.push(combinedValue)

        let combinedCell = new Cell(this, firstCell.x, firstCell.y, combinedValue, 'green', true, false)
        this.switchCells(secondCell, firstCell)
        this.cells[firstCell.y][firstCell.x] = combinedCell
    }

    public getCopyBoard(oldBoard: Board): Board {

        const newBoard = new Board()
        newBoard.initCells()
        newBoard.onCombineValues = oldBoard.onCombineValues

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                newBoard.cells[i][j] = oldBoard.cells[i][j]
            }
        }
        return newBoard
    }

    switchCells(cellToSwitch: Cell, cell: Cell): void {
        cell.isActive = true
        cell.available = false
        cell.color = cellToSwitch.color
        cell.value = cellToSwitch.value

        cellToSwitch.color = undefined
        cellToSwitch.value = null
        cellToSwitch.isActive = false
        cellToSwitch.available = true
    }

    public initCells() {
        for (let i = 0; i < 4; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 4; j++) {
                row.push(new Cell(this, j, i, null, undefined, false, true))
            }
            this.cells.push(row)
        }
    }

    checkIfAvailable(cell: Cell): boolean {
        return cell.available
    }

    addNewCell() {
        let readyToAdd = false
        while (!readyToAdd) {
            let randomX = Math.floor(Math.random() * 4)
            let randomY = Math.floor(Math.random() * 4)

            if (this.checkIfAvailable(this.cells[randomX][randomY])) {
                readyToAdd = true
                const startColor = colors[0].color
                const startValue = colors[0].value
                this.cells[randomX][randomY].value = startValue
                this.cells[randomX][randomY].color = startColor
                this.cells[randomX][randomY].isActive = true
                this.cells[randomX][randomY].available = false
            }
        }

    }
}