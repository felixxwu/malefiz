import {map1} from "../maps/map1";
import React from "react";
import {uniqueId} from "../utils/uniqueId";

const gridSize = 100
const pointSize = gridSize / 4
const lineWidth = gridSize / 20

function Board() {
    const viewBox = `0 0 ${map1.width * gridSize} ${map1.height * gridSize}`

    const pointIds = Object.keys(map1.points) as unknown as Array<keyof typeof map1.points>
    const boardPoints = pointIds.map(id => {
        const point = map1.points[id]
        return (
            <circle
                key={uniqueId()}
                cx={point.pos.x * gridSize}
                cy={point.pos.y * gridSize}
                r={pointSize}
                onClick={() => console.log('clicked:', point)}
            />
        )
    })

    const boardLines = pointIds.map(id => {
        const point = map1.points[id]
        return point.neighbours.map(neighbour => (
            <line
                key={uniqueId()}
                x1={point.pos.x * gridSize}
                y1={point.pos.y * gridSize}
                x2={map1.points[neighbour].pos.x * gridSize}
                y2={map1.points[neighbour].pos.y * gridSize}
                style={{strokeWidth: lineWidth, stroke: 'black'}}
            />
        ))
    })

    return <div style={board()}>
        <svg style={svg()} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {boardPoints}
            {boardLines}
        </svg>
    </div>

    function board(): React.CSSProperties {
        return {
            width: map1.width * gridSize,
            height: map1.height * gridSize
        }
    }

    function svg(): React.CSSProperties {
        return {
            width: '100%',
            height: '100%',
            backgroundColor: '#eeeeee'
        }
    }
}

export default Board
