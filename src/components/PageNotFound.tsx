import React, { useEffect } from 'react'
import { store } from '../utils/store'
import Board from './Board'
import { pageNotFound } from '../maps/404'

export default function PageNotFound() {
    useEffect(() => {
        store.state.map = pageNotFound
        store.state.pieces = []
    }, [])

    return <Board />
}
