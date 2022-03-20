import Display from "./Display"
import {initUser, isUserLoaded} from "./user-manager";
import {useStore} from "./store";
import React from "react";

function App() {

    const store = useStore()

    initUser()

    if (!isUserLoaded(store)) return (
        <div>Loading user...</div>
    )

    return (
        <div>
            <Display />
        </div>
    )
}

export default App
