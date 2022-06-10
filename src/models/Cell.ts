import {Board} from "./Board";

export class Cell {
    id: number
    x: number
    y: number
    board: Board
    available: boolean

    constructor(board: Board, x: number, y:number) {
        this.board = board
        this.x = x
        this.y = y
        this.available = false
        this.id = Math.random()
    }
}
