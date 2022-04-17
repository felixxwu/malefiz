import { useParams } from 'react-router-dom'
import Board from './Board'
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { global } from '../utils/store'
import { map1 } from '../maps/map1'

function Game() {
    const db = getFirestore()
    let { roomid = '' } = useParams()
    const [isRoomValid, setIsRoomValid] = useState(false)

    useEffect(() => {
        async function doesRoomExist() {
            const docRef = doc(db, 'rooms', roomid.toUpperCase())
            const docSnap = await getDoc(docRef)

            setIsRoomValid(docSnap.exists())
            // Do smth with the user data here
        }
        doesRoomExist().catch(e => console.error(e))
        global.store.map = map1
        global.store.pieces = [{ id: 1, x: 1, y: 1 }]
    }, [])

    return (
        <div>
            <div>
                The room code is <b>{isRoomValid ? roomid.toUpperCase() : 'invalid'}</b>
            </div>
            <Board />
        </div>
    )
}

export default Game
