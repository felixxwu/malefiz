import { defineStore } from 'truly-global-state'
import { AppState, Piece } from './types'
import { map1 } from '../maps/map1'

export const store = defineStore({
    appWidth: window.innerWidth,
    appHeight: window.innerHeight,
    userId: '',
    userName: '',
    appState: <AppState>'home',
    pieces: <Piece[]>[],
    connectionError: '',
    map: map1,
    mapWidth() {
        return this.map.right - this.map.left
    },
    mapHeight() {
        return this.map.bottom - this.map.top
    },
})
