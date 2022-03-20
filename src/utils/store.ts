import { defineStore } from "minimal-react-state";

const config = {
    appWidth: window.innerWidth,
    appHeight: window.innerHeight,
    userId: '',
    userName: '',
}

export const useStore = defineStore(config)

export type storeType = typeof config
