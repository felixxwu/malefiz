import { useStore } from "./store"

function Display() {
    const store = useStore()

    return (
        <div>
            Count: {store.count}
        </div>
    )
}

export default Display
