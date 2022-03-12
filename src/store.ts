import { defineStore } from "minimal-react-state";

export const useStore = defineStore({
    username: 'likhi',
    count: 0,
    page: 0,
    double() {
        this.count *= 2
    }
})
