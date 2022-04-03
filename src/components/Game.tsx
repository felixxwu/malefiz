import { useStore } from "../utils/store";
import Board from "./Board";

function Game() {
    const store = useStore()
    console.log('store roomCode', store.roomCode)
    return <div>
        game
        <Board />
    </div>
}

export default Game
