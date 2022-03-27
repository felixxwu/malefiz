export interface User {
    name: string,
    created: number,
    lastSeen: number,
}

export type AppState = 'home' | 'game'

export interface Map {
    [id: number]: Point
}

export interface Point {
    type: 'start' | 'end' | 'mid',
    pos: {
        x: number,
        y: number,
    },
    neighbours: number[],
}
