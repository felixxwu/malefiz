import { consts } from '../utils/consts'
import { uniqueId } from '../utils/uniqueId'
import React from 'react'
import { useStore } from '../utils/store'
import { getSerialisedPoints } from './Points'

export function Lines() {
    const store = useStore()

    const points = getSerialisedPoints()
    const boardLines = points.map(({ data }) => {
        return data.neighbours.map(neighbour => {
            const neighbourPoint = store.map.points[neighbour]
            return (
                <line
                    key={uniqueId()}
                    x1={(data.pos.x - store.map.left) * consts.gridSize}
                    y1={(data.pos.y - store.map.top) * consts.gridSize}
                    x2={(neighbourPoint.pos.x - store.map.left) * consts.gridSize}
                    y2={(neighbourPoint.pos.y - store.map.top) * consts.gridSize}
                    style={{ strokeWidth: consts.lineWidth, stroke: 'black' }}
                />
            )
        })
    })

    return <>{boardLines}</>
}
