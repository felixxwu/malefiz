import { consts } from '../utils/consts'
import { uniqueId } from '../utils/uniqueId'
import React from 'react'
import { store } from '../utils/store'
import { getSerialisedPoints } from './Points'

export function PointText() {
    const points = getSerialisedPoints()
    const pointsWithText = points.filter(point => point.data.text !== undefined)
    const textYOffset = 2
    const pointText = pointsWithText.map(({ data }) => {
        return (
            <tspan
                key={uniqueId()}
                x={(data.pos.x - store.state.map.left) * consts.gridSize}
                y={(data.pos.y - store.state.map.top) * consts.gridSize + textYOffset}
                fill={'white'}
                fontSize={consts.pageNotFoundFontSize}
            >
                {data.text}
            </tspan>
        )
    })

    return (
        <text dominantBaseline='middle' textAnchor='middle'>
            {pointText}
        </text>
    )
}
