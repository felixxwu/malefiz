import { initUser, isUserLoaded } from '../db/user-manager'
import { global, initStore } from '../utils/store'
import React, { useEffect } from 'react'
import Home from './Home'
import Game from './Game'
import CreateRoom from './CreateRoom'
import { cancelPointerEvent, onPointerDown, onPointerMove, onPointerUp } from './Pieces'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './PageNotFound'

function App() {
    initStore()
    initUser()

    useEffect(() => {
        const resize = () => {
            // -1 because decimals can be rounded up, causing scrollbars to appear
            global.store.appWidth = window.innerWidth - 1
            global.store.appHeight = window.innerHeight - 1
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
                // TODO think of a way to clean this up
                if (global.store.connectionError !== '') {
                    return (
                        <div>Could not connect to the server. {global.store.connectionError}</div>
                    )
                }

                if (!isUserLoaded()) return <div>Loading...</div>

                return (
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='createroom' element={<CreateRoom />} />
                        <Route path='room/:roomid' element={<Game />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                )
            })()}
        </div>
    )

    function app(): React.CSSProperties {
        return {
            width: global.store.appWidth,
            height: global.store.appHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
}

export default App
