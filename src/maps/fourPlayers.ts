import {Map} from '../utils/types'

export const map: Map = {
    0: {
        type: "end",
        pos: { x: 0, y: 0 },
        neighbours: [1],
    },
    1: {
        type: "mid",
        pos: { x: 1, y: 0 },
        neighbours: [0, 2],
    },
    2: {
        type: "mid",
        pos: { x: 2, y: 0 },
        neighbours: [1, 3],
    },
    3: {
        type: "start",
        pos: { x: 3, y: 0 },
        neighbours: [2],
    },
}