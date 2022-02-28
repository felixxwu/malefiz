import Button from "./Button"
import Display from "./Display"
import { doc, setDoc } from "firebase/firestore"; 
import { useEffect } from "react";
import { getFirestore } from "firebase/firestore"

function App() {

    useEffect(() => {
        const db = getFirestore()
        setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA",
            date: (new Date()).getTime()
          })
    }, [])

    return (
        <div>
            <Display />
            <Button />
        </div>
    )
}

export default App
