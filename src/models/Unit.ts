export class Unit {
    x: number
    y: number
    value: number
    id: number

    constructor(x: number, y:number, value: number) {
        this.x = x
        this.y = y
        this.value = value
        this.id = Math.random()
    }
}