import { useGetter, useSetter } from "./store"

function Button() {
    const set = useSetter()
    const count = useGetter('count')

    function handleSet() {
        set('count', count + 1)
    }

    return (
        <button onClick={handleSet} style={style()}>
            increase
        </button>
    )

    function style(): React.CSSProperties {
        return {
            padding: count,
            transition: '1s'
        }
    }
}

export default Button
