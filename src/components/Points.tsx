import { consts } from '../utils/consts'
import { uniqueId } from '../utils/uniqueId'
import React from 'react'
import { store } from '../utils/store'
import { Point } from '../utils/types'

export function Points() {
    const points = getSerialisedPoints()
    const boardPoints = points.map(({ data }) => {
        return (
            <circle
                key={uniqueId()}
                cx={(data.pos.x - store.state.map.left) * consts.gridSize}
                cy={(data.pos.y - store.state.map.top) * consts.gridSize}
                r={consts.pointSize}
            />
        )
    })

    return <>{boardPoints}</>
}

export function getSerialisedPoints() {
    const map = store.state.map
    const pointIds = Object.keys(map.points) as unknown as Array<keyof typeof map.points>
    return pointIds.map(id => ({ id, data: map.points[id] }))
}

export function getClosestPoint(x: number, y: number) {
    const points = getSerialisedPoints()
    let closestPoint: { distance: number; data: Point | null } = { distance: Infinity, data: null }
    for (const point of points) {
        const xDiff = point.data.pos.x - x
        const yDiff = point.data.pos.y - y
        const distance = xDiff * xDiff + yDiff * yDiff
        if (distance < closestPoint.distance) {
            closestPoint = { distance, data: point.data }
        }
    }
    return closestPoint
}
