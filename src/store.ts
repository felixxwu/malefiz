import { defineStore } from "minimal-react-state";

const config = {
    userId: '',
    userName: '',
}

export const useStore = defineStore(config)

export type storeType = typeof config
