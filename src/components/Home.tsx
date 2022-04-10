import { useStore } from '../utils/store'
import React, { useState } from 'react'
import logo from '../images/logo.svg'
import Button from './Button'
import { consts } from '../utils/consts'
import { useNavigate } from 'react-router-dom'

function Home() {
    const store = useStore()
    const navigate = useNavigate()
    const [roomCode, setRoomCode] = useState('')

    const handleCreateRoom = async () => {
        navigate('/createroom')
    }

    const handleJoinRoom = async () => {
        navigate(`/room/${roomCode}`, { replace: true })
    }

    return (
        <div style={home()}>
            <div style={title()}>
                <img src={logo} width='80' alt='Logo' />
                Malefiz
            </div>
            <div style={joinRoom()}>
                <input
                    type='text'
                    maxLength={4}
                    style={joinRoomTextBox()}
                    onChange={event => setRoomCode(event.target.value)}
                />
                <Button onClick={() => handleJoinRoom()} text='Join Room' />
                <Button onClick={() => handleCreateRoom()} text='Create Room' />
            </div>
            <div style={avatar()}>
                <Button onClick={() => navigate('room')} text='Go to game' />
            </div>
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
            gridTemplateAreas: "'title title' 'joinRoom avatar'",
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
            color: consts.primaryBgDark,
        }
    }

    function joinRoom(): React.CSSProperties {
        return {
            gridArea: 'joinRoom',
            display: 'grid',
            justifySelf: 'center',
            alignSelf: 'start',
            gap: '15px',
        }
    }

    function avatar(): React.CSSProperties {
        return {
            gridArea: 'avatar',
            display: 'grid',
            justifySelf: 'center',
            alignSelf: 'start',
            gap: '15px',
            marginTop: '20px', // Delete when grid area replaced with avatar contents
        }
    }

    function joinRoomTextBox(): React.CSSProperties {
        return {
            color: consts.primaryBgDark,
            display: 'block',
            margin: 'auto',
            border: 'none',
            padding: 0,
            width: '6ch',
            background: `repeating-linear-gradient(90deg, 
                ${consts.primaryBgDark} 0, ${consts.primaryBgDark} 1ch, 
                transparent 0, transparent 1.5ch) 
                0 100%/ 5.5ch 2px no-repeat`,
            font: '4ch droid sans mono, consolas, monospace',
            fontWeight: 'bold',
            letterSpacing: '0.5ch',
            outline: 'none',
            textTransform: 'uppercase',
            caretColor: 'transparent', //Hide the input insertion caret
        }
    }
}

export default Home
