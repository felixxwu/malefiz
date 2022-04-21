import React from 'react'
import { consts } from '../utils/consts'
import { Pieces } from './Pieces'
import { Points } from './Points'
import { Lines } from './Lines'
import { store } from '../utils/store'
import { PointText } from './PointText'

function Board() {
    const viewWidth = store.state.mapWidth() * consts.gridSize
    const viewHeight = store.state.mapHeight() * consts.gridSize
    const viewBox = `0 0 ${viewWidth} ${viewHeight}`

    return (
        <div style={board()}>
            <svg style={svg()} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
                <Lines />
                <Points />
                <Pieces />
                <PointText />
            </svg>
        </div>
    )

    function board(): React.CSSProperties {
        return {
            width: viewWidth,
            height: viewHeight,
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
