import { useGetter } from "./store"

function Display() {
    const count = useGetter('count')

    return (
        <div>
            Count: {count}
        </div>
    )
}

export default Display
