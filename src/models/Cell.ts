import {Board} from "./Board";

export class Cell {
    id: number
    x: number
    y: number
    board: Board
    available: boolean
    value: number | null
    color: string | undefined
    isActive: boolean


    constructor(board: Board, x: number, y: number, value: number | null, color: string | undefined, isActive: boolean) {
        this.board = board
        this.x = x
        this.y = y
        this.available = false
        this.id = Math.random()
        this.value = value
        this.color = color
        this.isActive = isActive
    }

    public addCellColor(cell: Cell, color: string): void {
        cell.color = color
    }

    public addCellValue(cell: Cell, value: number): void {
        cell.value = value
    }
}
