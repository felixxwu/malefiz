import { useStore } from "./store"

function Button() {
    const store = useStore()

    return (
        <>
            <button onClick={() => store.count += 1} style={style()}>
                increase
            </button>
            <br></br>
            <button onClick={() => store.double()} style={style()}>
                double
            </button>
        </>
    )

    function style(): React.CSSProperties {
        return {
            padding: store.count,
            transition: '1s'
        }
    }
}

export default Button
