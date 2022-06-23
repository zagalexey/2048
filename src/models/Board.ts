import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = []

    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.cells = this.cells
        return newBoard
    }

    switchCells (cellToSwitch: Cell, cell: Cell): void {
        console.log(`Cell to switch X: ${cellToSwitch.x} Y: ${cellToSwitch.y}`);
        console.log(`Cell X: ${cell.x} Y: ${cell.y}`);

        cell.isActive = true
        cell.color = cellToSwitch.color
        cell.value = cellToSwitch.value

        cellToSwitch.color = undefined
        cellToSwitch.value = null
        cellToSwitch.isActive = false
    }

    moveCell(cell: Cell, key: string): void {
        switch (key) {
            case 'ArrowLeft': {
                if(cell.x === 0) {
                    break
                }else {
                    this.switchCells(cell, this.cells[cell.y][0])
                }
                break
            }
            case 'ArrowRight': {
                const currentX: number = cell.x
                const currentY: number = cell.y
                if(currentX === 3) {
                    break
                }else {
                    this.switchCells(cell, this.cells[currentY][3])
                }
                break
            }
            case 'ArrowUp': {
                const currentX: number = cell.x
                const currentY: number = cell.y
                if(currentY === 0) {
                    break
                }else {
                    this.switchCells(cell, this.cells[currentX][0])
                }
                break
            }
            case 'ArrowDown': {
                const currentX: number = cell.x
                const currentY: number = cell.y
                if(currentY === 3) {
                    break
                }else {
                    this.switchCells(cell, this.cells[currentX][3])
                }
                break
            }
            default :
                break
        }
    }

    public initCells() {
        for (let i = 0; i < 4; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 4; j++) {
                row.push(new Cell(this, j, i, null, undefined, false))
            }
            this.cells.push(row)
        }
    }
}