import { useState } from "react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export default function Form() {
    const [name, setName] = useState("");
    const [createWin, setCreateWin] = useState("");

    function handleChange(e) {
        setName(e.target.value);
        setCreateWin(e.target.value);
     }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name === '') {
            alert('Please enter some text')
            return
        }
        await addDoc(collection(db, 'wins'), {
            text: createWin,
            timestamp: serverTimestamp()
        })
        window.location.reload();
        setName('')
    }

    return (
        <form  id="new-win-form" onSubmit={handleSubmit}>
            <div id="new-win-input">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    name="text"
                    placeholder="What I Accomplished..."
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div id="add-button">
                <button type="submit" className="btn btn-primary" >
                    Add
                </button>
            </div>
     
        </form>
    )
}
