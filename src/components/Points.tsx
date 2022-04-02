import {consts} from "../utils/consts";
import {uniqueId} from "../utils/uniqueId";
import React from "react";
import {storeType, useStore} from "../utils/store";

export function Points() {
    const store = useStore()

    const points = getSerialisedPoints(store)
    const boardPoints = points.map(({data}) => {
        return (
            <circle
                key={uniqueId()}
                cx={data.pos.x * consts.gridSize}
                cy={data.pos.y * consts.gridSize}
                r={consts.pointSize}
            />
        )
    })

    return <>
        {boardPoints}
    </>
}

export function getSerialisedPoints(store: storeType) {
    const map = store.mapLoaded
    const pointIds = Object.keys(map.points) as unknown as Array<keyof typeof map.points>
    return pointIds.map(id => ({id, data: map.points[id]}))
}
