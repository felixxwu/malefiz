import { defineStore } from "minimal-react-state";
import {AppState} from "./types";

const config = {
    appWidth: window.innerWidth,
    appHeight: window.innerHeight,
    userId: '',
    userName: '',
    appState: <AppState>'home',
}

export const useStore = defineStore(config)

export type storeType = typeof config
