import { store } from '../utils/store'
import { consts } from '../utils/consts'
import React from 'react'
import { getClosestPoint } from './Points'

export function Pieces() {
    return (
        <>
            {store.state.pieces.map(piece => (
                <circle
                    key={piece.id}
                    cx={(piece.x - store.state.map.left) * consts.gridSize}
                    cy={(piece.y - store.state.map.top) * consts.gridSize}
                    r={consts.gridSize / 3.5}
                    {...{ [consts.playerPieceAttributeName]: piece.id }}
                    style={style()}
                />
            ))}
        </>
    )

    function style(): React.CSSProperties {
        return {
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: consts.lineWidth,
            cursor: 'move',
        }
    }
}

export function onPointerDown(event: React.PointerEvent) {
    const pieceElement = viewHandler.getPieceFromEvent(event.nativeEvent)
    if (pieceElement === null) return
    viewHandler.setPieceElement(pieceElement)
}

export function onPointerMove(event: React.PointerEvent) {
    const coordinates = viewHandler.getMapSpaceCoordinates(event.clientX, event.clientY)
    if (coordinates === null) return
    viewHandler.movePiece(coordinates.x, coordinates.y)
}

export function onPointerUp(event: React.PointerEvent) {
    const coordinates = viewHandler.getMapSpaceCoordinates(event.clientX, event.clientY)
    if (coordinates === null) return
    const closestPoint = getClosestPoint(coordinates.x, coordinates.y)
    if (closestPoint.distance > consts.distanceToCancelPieceDrop || closestPoint.data === null) {
        cancelPointerEvent()
    } else {
        savePiecePosition(closestPoint.data.pos.x, closestPoint.data.pos.y)
    }
}

export function cancelPointerEvent() {
    const draggingPiece = store.state.pieces.find(piece => piece.id === viewHandler.getPieceId())
    if (draggingPiece === undefined) return
    viewHandler.movePiece(draggingPiece.x, draggingPiece.y, true)
    viewHandler.destroy()
}

function savePiecePosition(x: number, y: number) {
    const piece = store.state.pieces.find(piece => piece.id === viewHandler.getPieceId())
    if (!piece) return console.error('Piece', viewHandler.getPieceId(), 'not found')
    piece.x = x
    piece.y = y
    viewHandler.movePiece(x, y, true)
    viewHandler.destroy()
}

const viewHandler = {
    pieceElementToDrag: null as SVGElement | null,
    setPieceElement(element: SVGElement) {
        this.pieceElementToDrag = element
    },
    movePiece(x: number, y: number, animated: boolean = false) {
        if (this.pieceElementToDrag === null) return null
        this.pieceElementToDrag.style.transition = animated ? '0.3s' : 'none'
        const xPos = (x - store.state.map.left) * consts.gridSize
        const yPos = (y - store.state.map.top) * consts.gridSize
        this.pieceElementToDrag.setAttribute('cx', `${xPos}`)
        this.pieceElementToDrag.setAttribute('cy', `${yPos}`)
    },
    destroy() {
        this.pieceElementToDrag = null
    },
    getPieceId() {
        if (this.pieceElementToDrag === null) return null
        const pieceId = this.pieceElementToDrag.getAttribute(consts.playerPieceAttributeName)
        if (pieceId === null) return null
        return parseInt(pieceId)
    },
    getPieceFromEvent(event: PointerEvent) {
        const pieceElement = event.composedPath().find(target => {
            if (!(target instanceof SVGElement)) return false
            if (target.getAttribute(consts.playerPieceAttributeName)) return true
        })
        if (!pieceElement) return null
        if (!(pieceElement instanceof SVGElement)) return null
        return pieceElement
    },
    getMapSpaceCoordinates(clientX: number, clientY: number) {
        const svgRect = this.getSVGRect()
        if (svgRect === null) return null
        const xPerCent = (clientX - svgRect.left) / svgRect.width
        const yPerCent = (clientY - svgRect.top) / svgRect.height
        const xPos = store.state.mapWidth() * xPerCent + store.state.map.left
        const yPos = store.state.mapHeight() * yPerCent + store.state.map.top
        const xPosBounded = Math.max(store.state.map.left, Math.min(xPos, store.state.map.right))
        const yPosBounded = Math.max(store.state.map.top, Math.min(yPos, store.state.map.bottom))
        return { x: xPosBounded, y: yPosBounded }
    },
    getSVGRect() {
        if (this.pieceElementToDrag === null) return null
        const svgElement = this.pieceElementToDrag.closest('svg')
        if (svgElement === null) return null
        if (!svgElement.getBoundingClientRect) return null
        return svgElement.getBoundingClientRect()
    },
}
