import { initUser, isUserLoaded } from '../db/user-manager'
import { global, useStore } from '../utils/store'
import React, { useEffect } from 'react'
import Home from './Home'
import Game from './Game'
import CreateRoom from './CreateRoom'
import { cancelPointerEvent, onPointerDown, onPointerMove, onPointerUp } from './Pieces'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
    const store = useStore()
    global.store = store

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

    return (
        <div
            style={app()}
            onPointerDown={e => onPointerDown(e)}
            onPointerMove={e => onPointerMove(e)}
            onPointerUp={e => onPointerUp(e)}
            onPointerCancel={() => cancelPointerEvent()}
            onPointerLeave={() => cancelPointerEvent()}
        >
            {(() => {
                if (store.connectionError !== '')
                    return <div>Could not connect to the server. {store.connectionError}</div>

                if (!isUserLoaded()) return <div>Loading...</div>

                switch (store.appState) {
                    case 'game':
                        return <Game />
                    case 'home':
                        return <Home />
                    case 'createroom':
                        return <CreateRoom />
                }
            })()}
        </div>
    )

    function app(): React.CSSProperties {
        return {
            width: store.appWidth,
            height: store.appHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}

export default App
