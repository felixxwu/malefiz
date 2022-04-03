import { useStore } from '../utils/store'
import Board from './Board'

function Game() {
    const store = useStore()
    return (
        <div>
            game
            <Board />
        </div>
    )
}

export default Game
