import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let i = 0; i < 4; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 4; j++) {
                row.push(new Cell(this, i + 1, j + 1))
            }
            this.cells.push(row)
        }
    }
}