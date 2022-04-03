import { useStore } from '../utils/store'
import { updateUsername } from '../db/user-manager'
import React from 'react'

function Display() {
    const store = useStore()

    async function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        await updateUsername(event.target.value)
    }

    return (
        <div>
            User ID: {store.userId}
            <br />
            Username: <input type='text' value={store.userName} onInput={handleInput} />
            <br />
            App width: {store.appWidth} | App height: {store.appHeight}
        </div>
    )
}

export default Display
