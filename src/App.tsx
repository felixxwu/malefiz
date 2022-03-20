import Display from "./Display"
import {initUser, isUserLoaded} from "./user-manager";
import {useStore} from "./store";
import React, {useEffect} from "react";
import logo from './logo.svg'

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

    if (!isUserLoaded(store)) return (
        <div>Loading user...</div>
    )

    return (
        <div style={app()}>
            <img src={logo} width="150" alt="Logo" />
            <Display />
        </div>
    )

    function app(): React.CSSProperties {
        return {
            width: store.appWidth,
            height: store.appHeight,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}

export default App
