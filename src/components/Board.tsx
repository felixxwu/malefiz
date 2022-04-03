import { map1 } from '../maps/map1'
import React from 'react'
import { consts } from '../utils/consts'
import { Pieces } from './Pieces'
import { Points } from './Points'
import { Lines } from './Lines'

function Board() {
    const viewBox = `0 0 ${map1.width * consts.gridSize} ${map1.height * consts.gridSize}`

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
            width: map1.width * consts.gridSize,
            height: map1.height * consts.gridSize,
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
