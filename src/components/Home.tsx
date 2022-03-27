import Display from "./Display"
import {useStore} from "../utils/store";
import React from "react";
import logo from '../images/logo.svg'

function Home() {
    const store = useStore()

    return (
        <div style={app()}>
            <img src={logo} width="150" alt="Logo" />
            <Display />
            <button onClick={() => store.appState = 'game'}>Go to game</button>
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

export default Home
