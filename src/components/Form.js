import { useState } from "react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';



export default function Form(props) {
    const collectionRef = collection(db, 'win');
    const [name, setName] = useState("");
    const [createWin, setCreateWin] = useState("");

    function handleChange(e) {
        setName(e.target.value);
        setCreateWin(e.target.value);
     }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     props.addWin(name);
    //     setName("");  
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collectionRef, {
                win: createWin,
                timestamp: serverTimestamp()
            })
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="label-wrapper">
                <label htmlFor="new-win-input" className="label__lg">
                What I accomplished today:
                </label>
            </h3>
            <input
                type="text"
                id="new-win-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    )
}