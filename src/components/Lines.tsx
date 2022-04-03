import { consts } from '../utils/consts'
import { uniqueId } from '../utils/uniqueId'
import React from 'react'
import { useStore } from '../utils/store'
import { getSerialisedPoints } from './Points'

export function Lines() {
    const store = useStore()

    const points = getSerialisedPoints(store)
    const boardLines = points.map(({ data }) => {
        return data.neighbours.map(neighbour => (
            <line
                key={uniqueId()}
                x1={data.pos.x * consts.gridSize}
                y1={data.pos.y * consts.gridSize}
                x2={store.mapLoaded.points[neighbour].pos.x * consts.gridSize}
                y2={store.mapLoaded.points[neighbour].pos.y * consts.gridSize}
                style={{ strokeWidth: consts.lineWidth, stroke: 'black' }}
            />
        ))
    })

    return <>{boardLines}</>
}
