import React, { useEffect } from 'react'
import { global } from '../utils/store'
import Board from './Board'
import { pageNotFound } from '../maps/404'

export default function PageNotFound() {
    useEffect(() => {
        global.store.map = pageNotFound
        global.store.pieces = []
    }, [])

    return <Board />
}
