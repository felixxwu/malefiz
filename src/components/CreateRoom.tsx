import { generateCode } from '../db/generate-room-code'
import { useStore } from '../utils/store'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function CreateRoom() {
    const store = useStore()
    const navigate = useNavigate()

    const handlePlayerNumberClick = async (numberofPlayers: number) => {
        const roomCode = await generateCode(store.userId, numberofPlayers)
        navigate(`/room/${roomCode}`, { replace: true })
    }

    return (
        <div style={createroomgrid()}>
            <Button onClick={() => handlePlayerNumberClick(2)} text='2 players' />
            <Button onClick={() => handlePlayerNumberClick(3)} text='3 players' />
            <Button onClick={() => handlePlayerNumberClick(4)} text='4 players' />
            <Button onClick={() => handlePlayerNumberClick(5)} text='5 players' />
            <Button onClick={() => handlePlayerNumberClick(6)} text='6 players' />
        </div>
    )

    function createroomgrid(): React.CSSProperties {
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
