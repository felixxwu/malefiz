import {initUser, isUserLoaded} from "../db/user-manager";
import {useStore} from "../utils/store";
import React, {useEffect} from "react";
import Home from "./Home";
import Game from "./Game";

function App() {
    const store = useStore()
    initUser()

    useEffect(() => {
        const resize = () => {
            // -1 because decimals can be rounded up, causing scrollbars to appear
            store.appWidth = window.innerWidth - 1
            store.appHeight = window.innerHeight - 1
        }
        window.onresize = resize
        resize()
    }, [])

    return <div style={app()}>
        {(() => {
            if (!isUserLoaded(store)) return (
                <div>Loading user...</div>
            )

            switch (store.appState) {
                case 'game': return <Game />
                case 'home': return <Home />
            }
        })()}
    </div>

    function app(): React.CSSProperties {
        return {
            width: store.appWidth,
            height: store.appHeight,
        }
    }

}

export default App
