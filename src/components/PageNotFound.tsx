import React from 'react'
import { consts } from '../utils/consts'
import { useStore } from '../utils/store'
import { Lines } from './Lines'
import { Pieces } from './Pieces'
import { Points } from './Points'

function PageNotFound() {
    const store = useStore()

    const viewBox = `0 0 ${store.mapWidth * consts.gridSize} ${store.mapHeight * consts.gridSize}`

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
            width: store.mapWidth * consts.gridSize,
            height: store.mapHeight * consts.gridSize,
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

export default PageNotFound
