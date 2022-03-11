import create from "zustand";

const config = {
    username: 'likhi',
    count: 1,
    pagenumber: 0,
}

const actions = (set: ZustandSetter) => {
    return {
        double() {
            set(state => ({count: state.count * 2}))
        },
        setStoreValue: <T extends ConfigKey>(name: T, value: typeof config[T]) => {
            set(() => <{[key in T]: typeof config[T]}>({[name]: value}))
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////

export function useStore() {

    // use all hooks from the store and save them in an object
    const hooks: any = {}
    const storeKeys = <(keyof Store)[]>Object.keys(config).concat(actionKeys)
    for (const key of storeKeys) {
        hooks[key] = store(state => state[key])
    }

    // expose saved hooks as a proxy object
    return new Proxy<Store>(hooks, {
        // get the reactive hook value
        get(hook, key: ConfigKey) {
            return hook[key]
        },
        // set the store value using the setStoreValue hook
        set(_, key: ConfigKey, value) {
            hooks.setStoreValue(key, value)
            return true
        }
    })
}

// store = config + actions
type Store = typeof config & ReturnType<typeof actions>
const store = create<Store>(set => ({
    ...config,
    ...actions(set as ZustandSetter)
}))

// union of all store keys
type ConfigKey = keyof typeof config

// Zustand way of setting store values by defining a subset of the entire store object
type ZustandSetter = <T extends ConfigKey>(
    setter: (state: typeof config) => {[key in T]: typeof config[T]}
) => void

// array of all action keys
const actionKeys = Object.keys(actions(undefined as any))
