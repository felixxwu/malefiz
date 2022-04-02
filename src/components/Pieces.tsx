import {storeType, useStore} from "../utils/store";
import {consts} from "../utils/consts";
import React from "react";
import {map1} from "../maps/map1";

export function Pieces() {
    const store = useStore()

    return <>
        {store.pieces.map(piece => (
            <circle
                key={piece.id}
                cx={piece.x * consts.gridSize}
                cy={piece.y * consts.gridSize}
                r={30}
                {...{[consts.playerPieceAttributeName]: piece.id}}
                style={style()}
            />
        ))}
    </>

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

export function onPointerUp(event: React.PointerEvent, store: storeType) {
    const coordinates = viewHandler.getMapSpaceCoordinates(event.clientX, event.clientY)
    if (coordinates === null) return
    if (coordinates.x > 2) {
        cancelPointerEvent(store)
    } else {
        savePiecePosition(coordinates.x, coordinates.y, store)
    }
}

export function cancelPointerEvent(store: storeType) {
    const draggingPiece = store.pieces.find(piece => piece.id === viewHandler.getPieceId())
    if (draggingPiece === undefined) return
    viewHandler.movePiece(draggingPiece.x, draggingPiece.y, true)
    viewHandler.destroy()
}

function savePiecePosition(x: number, y: number, store: storeType) {
    store.pieces = store.pieces.map(piece => {
        return piece.id === viewHandler.getPieceId() ? {...piece, x, y} : piece
    })
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
        this.pieceElementToDrag.setAttribute('cx', `${x * consts.gridSize}`)
        this.pieceElementToDrag.setAttribute('cy', `${y * consts.gridSize}`)
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
        const xPos = map1.width * xPerCent
        const yPos = map1.height * yPerCent
        const xPosBounded = Math.max(0, Math.min(xPos, map1.width))
        const yPosBounded = Math.max(0, Math.min(yPos, map1.height))
        return {x: xPosBounded, y: yPosBounded}
    },
    getSVGRect() {
        if (this.pieceElementToDrag === null) return null
        const svgElement = this.pieceElementToDrag.closest('svg')
        if (svgElement === null) return null
        if (!svgElement.getBoundingClientRect) return null
        return svgElement.getBoundingClientRect()
    },
}
