import { useParams } from 'react-router-dom'
import { useStore } from '../utils/store'
import Board from './Board'
import { doc, getFirestore, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function Game() {
    const store = useStore()
    const db = getFirestore()
    let { roomid = '' } = useParams()
    const [isRoomValid, setIsRoomValid] = useState(false)

    useEffect(() => {
        async function doesRoomExist() {
            const docRef = doc(db, 'rooms', roomid)
            const docSnap = await getDoc(docRef)

            setIsRoomValid(docSnap.exists())
            // Do smth with the user data here
        }
        doesRoomExist()
    }, [])

    return (
        <div>
            <div>
                The room code is <b>{isRoomValid ? roomid : 'invalid'}</b>
            </div>
            <Board />
        </div>
    )
}

export default Game
