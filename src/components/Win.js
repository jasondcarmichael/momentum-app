import { useState } from "react"
// import { doc, deleteDoc } from 'firebase/firestore';
// import { db } from '../services/firebase.config';


export default function Win({ win, deleteWin }) {

    return (

    <div className="win-item">
            <hr />
            <span>
                <div className="c-cb">
                    {/* <input 
                        id={win.id}
                        type="checkbox" 
                        defaultChecked={true}
                    /> */}
                    <label className="win-label">
                        {/* {props.name} */}
                        {win.text}
                    </label>
                </div>
            </span>
            <span className="float-end mx-3">
                <button
                        type="button"
                        className="btn btn-primary"
                        // onClick={() => setEditing(true)}
                    >
                    Edit <span className="visually-hidden">{win.text}</span>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger float-end"
                        onClick={() => deleteWin(win.id)}
                    >
                    Delete <span className="visually-hidden">{win.text}</span>
                </button>
            </span>
        </div>
    );

}


    // const [isEditing, setEditing] = useState(false);
    // const [newName, setNewName] = useState("");

    // function handleChange(e) {
    //     setNewName(e.target.value);
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     win.editWin(win.id, newName);
    //     setNewName("");
    //     setEditing(false);
    // }

    // const deleteWin = async (id) => {
    //     try {
    //         window.confirm("Are you sure you want to delete this accomplishment?")
    //         const documentRef = doc(db, "win", id);
    //         await deleteDoc(documentRef)
    //         window.location.reload();
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // const editingForm = (
    //     <form className="stack-small" onSubmit={handleSubmit}>
    //         <div className="form-group">
    //         <label className="win-label" htmlFor={win.id}>
    //             New name for {win.text}
    //         </label>
    //         <input
    //             id={win.id} 
    //             className="win-text" 
    //             type="text"
    //             value={newName}
    //             onChange={handleChange}
    //         />
    //         </div>
    //         <div className="btn-group">
    //         <button
    //             type="button" 
    //             className="btn btn-secondary"
    //             onClick={() => setEditing(false)}
    //         >
    //             Cancel
    //             <span className="visually-hidden">renaming {win.text}</span>
    //         </button>
    //         <button type="submit" className="btn btn-primary">
    //             Save
    //             <span className="visually-hidden">new name for {win.text}</span>
    //         </button>
    //         </div>
    //     </form>
    // );

    // const viewWin = (
    //     <div className="win-item">
    //         <hr />
    //         <span>
    //             <div className="c-cb">
    //                 <input 
    //                     id={win.id}
    //                     type="checkbox" 
    //                     defaultChecked={true}
    //                 />
    //                 <label className="win-label" htmlFor={win.id}>
    //                     {/* {props.name} */}
    //                     {win.text}
    //                 </label>
    //             </div>
    //         </span>
    //         <span className="float-end mx-3">
    //             <button
    //                     type="button"
    //                     className="btn btn-primary"
    //                     onClick={() => setEditing(true)}
    //                 >
    //                 Edit <span className="visually-hidden">{win.text}</span>
    //                 </button>
    //                 <button 
    //                     type="button" 
    //                     className="btn btn-danger float-end"
                        
                        // onClick={() => deleteWin(id)}

                        // onClick={() => props.deleteWin(props.id)}
//                     >
//                     Delete <span className="visually-hidden">{win.text}</span>
//                 </button>
//             </span>
            
//             <div className="btn-group">
                
                
//             </div>
//         </div>
//     );

//     return <li className="win">{isEditing ? editingForm : viewWin}</li>;

// }