import create from "zustand";

const config = {
    username: 'likhi',
    count: 0,
    pagenumber: 0,
}

const actions = (set: ZustandSetter) => {
    return {
        increment() {
            set(state => ({count: state.count + 1}))
        },
        decrement() {
            set(state => ({count: state.count - 1}))
        },
        setStoreValue: <T extends ConfigKey>(name: T, value: typeof config[T]) => {
            set(() => <{[key in T]: typeof config[T]}>({[name]: value}))
        }
    }
}

type Store = typeof config & ReturnType<typeof actions>

// union of all store keys
type ConfigKey = keyof typeof config

// Zustand way of setting store values by defining a subset of the entire store object
type ZustandSetter = <T extends ConfigKey>(
    setter: (state: typeof config) => {[key in T]: typeof config[T]}
) => void

const store = create<Store>(set => ({
    ...config,
    ...actions(set as ZustandSetter)
}))

export const useGetter = <T extends keyof Store>(key: T) => {
    return store(state => state[key]) as Store[T]
}

export const useSetter = () => {
    return store(state => state.setStoreValue)
}