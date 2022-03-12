import { useStore } from "./store"

function DisplayPage() {
    const store = useStore(['page'])

    console.log('update page')

    return (
        <div>
            Page: {store.page}
        </div>
    )
}

export default DisplayPage
