import { defineStore } from "minimal-react-state";

const config = {
    username: 'likhi',
    count: 0,
    pagenumber: 0,
    double() {
        this.count *= 2
    }
}

export const useStore = defineStore<typeof config>(config)
