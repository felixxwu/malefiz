import { defineStore } from 'minimal-react-state'
import { AppState, Piece } from './types'
import { map1 } from '../maps/map1'

const config = {
    appWidth: window.innerWidth,
    appHeight: window.innerHeight,
    userId: '',
    userName: '',
    roomCode: '',
    appState: <AppState>'home',
    pieces: <Piece[]>[{ id: 1, x: 1, y: 1 }],
    mapLoaded: map1,
    connectionError: '',
}

export const useStore = defineStore(config)

export type storeType = typeof config
