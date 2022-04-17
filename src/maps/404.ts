import { Map } from '../utils/types'

export const pageNotFound: Map = {
    top: 0,
    left: 0,
    right: 4,
    bottom: 2,
    points: {
        0: {
            type: 'mid',
            pos: { x: 1, y: 1 },
            neighbours: [1],
            text: '4',
        },
        1: {
            type: 'mid',
            pos: { x: 2, y: 1 },
            neighbours: [0],
            text: '0',
        },
        2: {
            type: 'mid',
            pos: { x: 3, y: 1 },
            neighbours: [],
            text: '4',
        },
    },
}
