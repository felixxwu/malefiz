import { useGetter, useSetter } from "./store"

function Button() {
    const set = useSetter()
    const count = useGetter('count')

    function handleSet() {
        set('count', count + 1)
    }

    return (
        <button onClick={handleSet}>
            increase
        </button>
    )
}

export default Button
