import React from 'react'
import { consts } from '../utils/consts'
import { Pieces } from './Pieces'
import { Points } from './Points'
import { Lines } from './Lines'
import { useStore } from '../utils/store'

function Board() {
    const store = useStore()

    const viewBox = `0 0 ${(store.mapLoaded.right - store.mapLoaded.left) * consts.gridSize} ${
        (store.mapLoaded.bottom - store.mapLoaded.top) * consts.gridSize
    }`

    return (
        <div style={board()}>
            <svg style={svg()} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
                <Lines />
                <Points />
                <Pieces />
            </svg>
        </div>
    )

    function board(): React.CSSProperties {
        return {
            width: (store.mapLoaded.right - store.mapLoaded.left) * consts.gridSize,
            height: (store.mapLoaded.bottom - store.mapLoaded.top) * consts.gridSize,
        }
    }

    function svg(): React.CSSProperties {
        return {
            width: '100%',
            height: '100%',
            backgroundColor: '#eeeeee',
        }
    }
}

export default Board
