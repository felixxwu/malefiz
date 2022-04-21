import { generateCode } from '../db/generate-room-code'
import { store } from '../utils/store'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function CreateRoom() {
    const navigate = useNavigate()

    const handlePlayerNumberClick = async (numberOfPlayers: number) => {
        const roomCode = await generateCode(store.state.userId, numberOfPlayers)
        navigate(`/room/${roomCode}`, { replace: true })
    }

    return (
        <div style={createRoomGrid()}>
            <Button onClick={() => handlePlayerNumberClick(2)} text='2 players' />
            <Button onClick={() => handlePlayerNumberClick(3)} text='3 players' />
            <Button onClick={() => handlePlayerNumberClick(4)} text='4 players' />
            <Button onClick={() => handlePlayerNumberClick(5)} text='5 players' />
            <Button onClick={() => handlePlayerNumberClick(6)} text='6 players' />
        </div>
    )

    function createRoomGrid(): React.CSSProperties {
        return {
            width: '100%',
            display: 'grid',
            gridAutoFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: '15px',
        }
    }
}

export default CreateRoom
