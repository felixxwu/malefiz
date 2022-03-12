import Button from "./Button"
import DisplayCount from "./DisplayCount"
import { doc, setDoc } from "firebase/firestore"; 
import { useEffect } from "react";
import { getFirestore } from "firebase/firestore"
import DisplayPage from "./DisplayPage";

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
            firebase CI
            <DisplayCount />
            <DisplayPage />
            <Button />
        </div>
    )
}

export default App
