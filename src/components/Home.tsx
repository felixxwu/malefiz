import {useStore} from "../utils/store";
import React from "react";
import logo from '../images/logo.svg'

function Home() {
    const store = useStore()

    return (
        <div style={home()}>
            <div style={title()}>
                <img src={logo} width="80" alt="Logo" /> 
                Malefiz
            </div>
            <div style={joinRoom()}>
                <input type='text' maxLength={4} style={joinRoomTextBox()} />
                <button>Join Room</button>
                <button>Create Room</button>
            </div>
            <button onClick={() => store.appState = 'game'}>Go to game</button>
        </div>
    )

    function home(): React.CSSProperties {
        return {
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '0.8fr 1.2fr',
            gap: '20px 0px',
            gridAutoFlow: 'row',
            gridTemplateAreas:"'title title' 'joinRoom avatar'"
        }
    }

    function title(): React.CSSProperties {
        return {
            gridArea: 'title',
            display: 'grid',
            justifySelf: 'center',
            alignSelf: 'end',
            alignItems: 'center',
            justifyItems: 'center',
            fontFamily: 'Lexend Deca',
            fontSize: 'x-large',
        }
    }

    function joinRoom(): React.CSSProperties {
        return {
            gridArea: 'joinRoom', 
            display: 'grid',
            justifySelf: 'center',
            alignSelf: 'start',
        }
    }

    function joinRoomTextBox(): React.CSSProperties {
        return {
            display: 'block',
            margin: '2em auto',
            border: 'none',
            padding: 0,
            width: '6ch',
            background: `repeating-linear-gradient(90deg, 
                dimgrey 0, dimgrey 1ch, 
                transparent 0, transparent 1.5ch) 
                0 100%/ 5.5ch 2px no-repeat`,
            font: '3ch droid sans mono, consolas, monospace',
            letterSpacing: '0.5ch',
            outline: 'none',
            textTransform: 'uppercase'
        }
    }
}

export default Home
