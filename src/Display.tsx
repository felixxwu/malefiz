import { useStore } from "./store"
import {updateUsername} from "./user-manager";
import React from "react";

function Display() {
    const store = useStore()

    async function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        await updateUsername(event.target.value, store)
    }

    return (
        <div>
            User ID: {store.userId}
            <br/>
            Username: <input type="text" value={store.userName} onInput={handleInput} />
            <br/>
            App width: {store.appWidth} | App height: {store.appHeight}
        </div>
    )

}

export default Display
