import { defineStore } from 'minimal-react-state'
import { AppState, Piece } from './types'
import { map1 } from '../maps/map1'

const config = {
    appWidth: window.innerWidth,
    appHeight: window.innerHeight,
    userId: '',
    userName: '',
    appState: <AppState>'home',
    pieces: <Piece[]>[{ id: 1, x: 1, y: 1 }],
    connectionError: '',
    map: map1,
    get mapWidth() {
        return this.map.right - this.map.left
    },
    get mapHeight() {
        return this.map.bottom - this.map.top
    },
}

export const useStore = defineStore(config)

export type storeType = typeof config

export const global = {
    storeValue: <storeType | null>null,
    set store(value: storeType) {
        this.storeValue = value
    },
    get store() {
        if (this.storeValue === null) throw Error('Did not initialise global store before using it')
        return this.storeValue
    },
}
