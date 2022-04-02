import {useStore, storeType} from "../utils/store";
import {useEffect} from "react";
import {addDoc, collection, doc, getFirestore, updateDoc, getDoc} from "firebase/firestore";
import {consts} from "../utils/consts";
import {User} from "../utils/types";
import Chance from 'chance'
import {debounce} from "throttle-debounce";

const chance = new Chance(Math.random)

// hook - take the user from localStorage, or create one if none defined
export function initUser() {
    const store = useStore()

    useEffect(() => {
        (async () => {
            try {
                // userData will always be a valid user, whether it's an existing one or not
                const userData = await getUserDataFromDb() ?? createNewUserData()

                // localStorageUserId can be null here, in which case a new user will be created
                await createOrUpdateUser(userData, store)
            } catch (e) {
                store.connectionError = `${e}`
            }
        })()
    }, [])
}

function createNewUserData(): User {
    const now = (new Date()).getTime()
    return {
        name: chance.word({capitalize: true}),
        created: now,
        lastSeen: now,
    }
}

// returns null if localstorage userId === null or if the user doesn't exist on the db
async function getUserDataFromDb() {
    // take id from localstorage if it exists
    const userId = localStorage.getItem(consts.localStoreUserIdKey)
    if (userId === null) return null

    const db = getFirestore()
    const docSnap = await getDoc(doc(db, consts.userCollection, userId))
    if (docSnap.exists()) {
        return docSnap.data() as User
    } else {
        // invalidate current localstorage userid
        localStorage.removeItem(consts.localStoreUserIdKey)
        return null
    }
}

// if userId is null, create a new user in the db and use the newly generated id
async function createOrUpdateUser(userData: Partial<User>, store: storeType) {
    let userId = localStorage.getItem(consts.localStoreUserIdKey)
    if (userId === null) {
        const db = getFirestore()
        const docRef = await addDoc(collection(db, consts.userCollection), userData)
        userId = docRef.id
    }

    // update store
    store.userId = userId
    if (userData.name !== undefined) store.userName = userData.name

    // update localstorage
    localStorage.setItem(consts.localStoreUserIdKey, userId)

    // update db
    await updateDocDebounced(userId, userData)
}

// debounce only fires the last request in a burst of successive events
const updateDocDebounced = debounce(500, async (id: string, userData: Partial<User>) => {
    const now = (new Date()).getTime()
    const db = getFirestore()
    await updateDoc(doc(db, consts.userCollection, id), {...userData, lastSeen: now})
})

// user can be loaded with initUser()
export function isUserLoaded(store: storeType) {
    return store.userId !== ''
}

// updates the db and store with new username
export async function updateUsername(newName: string, store: storeType) {
    const updateData: Partial<User> = { name: newName }
    await createOrUpdateUser(updateData, store)
}


