import { Map } from '../utils/types'

export const map1: Map = {
    top: 0,
    left: 0,
    right: 5,
    bottom: 2,
    points: {
        0: {
            type: 'end',
            pos: { x: 1, y: 1 },
            neighbours: [1, 2],
        },
        1: {
            type: 'mid',
            pos: { x: 2, y: 1.5 },
            neighbours: [0, 2],
        },
        2: {
            type: 'mid',
            pos: { x: 3, y: 0.5 },
            neighbours: [1, 3],
        },
        3: {
            type: 'start',
            pos: { x: 4, y: 1 },
            neighbours: [2],
        },
    },
}
