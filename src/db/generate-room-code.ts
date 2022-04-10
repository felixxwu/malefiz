import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { getAllRoomCodes } from './get-all-room-codes'

export async function generateCode(
    userId: string,
    numberOfPlayers: number = 1,
    codeLength: number = 4
) {
    let code
    const usedCodes = new Set(await getAllRoomCodes())

    do {
        code = getRandomCode(codeLength)
    } while (usedCodes.has(code))

    const db = getFirestore()
    await setDoc(doc(db, 'rooms', code), {
        userIds: [userId],
        numberOfPlayers: numberOfPlayers,
    })

    return code
}

export async function releaseCode(roomCode: string) {
    const db = getFirestore()
    await deleteDoc(doc(db, 'rooms', roomCode))
}

function getRandomCode(codeLength: number): string {
    //Generates random characters to form a string with a length of codeLength
    return Array.from({ length: codeLength }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    ).join('')
}
