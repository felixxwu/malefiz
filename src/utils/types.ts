export interface User {
    name: string
    created: number
    lastSeen: number
}

export type AppState = 'home' | 'game' | 'createroom'

export type Id = number

export interface Map {
    top: number
    left: number
    right: number
    bottom: number
    points: {
        [id: Id]: Point
    }
}

export interface Point {
    type: 'start' | 'end' | 'mid' | 'stone'
    pos: {
        x: number
        y: number
    }
    neighbours: Id[]
}

export interface Piece {
    id: number
    x: number
    y: number
}
