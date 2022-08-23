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


    constructor(board: Board, x: number, y: number, value: number | null, color: string | undefined, isActive: boolean, available: boolean) {
        this.board = board
        this.x = x
        this.y = y
        this.available = available
        this.id = Math.random()
        this.value = value
        this.color = color
        this.isActive = isActive
    }
}
