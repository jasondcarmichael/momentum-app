import { useState } from "react"
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebase.config';


export default function Win(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editWin(props.id, newName);
        setNewName("");
        setEditing(false);
    }

    const deleteWin = async (id) => {
        try {
            window.confirm("Are you sure you want to delete this accomplishment?")
            const documentRef = doc(db, "win", `${id}`);
            await deleteDoc(documentRef)
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }

    const editingForm = (
        <form className="stack-small" onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="win-label" htmlFor={props.id}>
                New name for {props.name}
            </label>
            <input
                id={props.id} 
                className="win-text" 
                type="text"
                value={newName}
                onChange={handleChange}
            />
            </div>
            <div className="btn-group">
            <button
                type="button" 
                className="btn win-cancel"
                onClick={() => setEditing(false)}
            >
                Cancel
                <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button type="submit" className="btn btn__primary win-edit">
                Save
                <span className="visually-hidden">new name for {props.name}</span>
            </button>
            </div>
        </form>
    );

    const viewWin = (
        <div className="stack-small">
            <div className="c-cb">
                <input 
                    id={props.id}
                    type="checkbox" 
                    defaultChecked={true}
                />
                <label className="win-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn"
                    onClick={() => setEditing(true)}
                >
                Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    
                    onClick={(id) => deleteWin(id)}

                    // onClick={() => props.deleteWin(props.id)}
                >
                Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li className="win">{isEditing ? editingForm : viewWin}</li>;

}