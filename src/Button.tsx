import { useStore } from "./store"

function Button() {
    const store = useStore()

    function handleSet() {
        store.count += 1
        // store.double()
    }

    return (
        <button onClick={handleSet} style={style()}>
            increase
        </button>
    )

    function style(): React.CSSProperties {
        return {
            padding: store.count,
            transition: '1s'
        }
    }
}

export default Button
