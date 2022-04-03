import { collection, getDocs, getFirestore } from 'firebase/firestore'

export async function getAllRoomCodes() {
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'rooms'))
    return querySnapshot.docs.map(doc => doc.id)
}
