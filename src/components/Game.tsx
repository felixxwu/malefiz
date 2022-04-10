import { useParams } from 'react-router-dom'
import { useStore } from '../utils/store'
import Board from './Board'

function Game() {
    const store = useStore()
    let { roomid } = useParams()
    return (
        <div>
            game with room code {roomid}
            <Board />
        </div>
    )
}

export default Game
