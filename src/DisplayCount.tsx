import { useStore } from "./store"

function DisplayCount() {
    const store = useStore(['count'])

    console.log('update count')

    return (
        <div>
            Count: {store.count}
        </div>
    )
}

export default DisplayCount
