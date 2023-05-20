import EditWin from "./EditWin";

export default function Win({ win, deleteWin, editWin }) {

    return (
        <div className="win-item">
                <hr />
                <span>
                    <div className="c-cb">
                        <label className="win-label">
                            {win.text}
                        </label>
                    </div>
                </span>
                <span className="float-end mx-3">
                    <EditWin win={win} id={win.id} editWin={editWin}/>
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



   

    // const editingForm = (
    //     <form className="stack-small" onSubmit={() => editWin(win)}>
    //         <div className="form-group">
    //         <label className="win-label" htmlFor={win.id}>
    //             New name for {win.text}
    //         </label>
    //         <input
    //             id={win.id} 
    //             win={win}
    //             className="win-text" 
    //             type="text"
    //             value={newName}
    //             onChange={handleChange}
    //             // onChange={() => editWin(win)}
    //         />
    //         </div>
    //         <div className="btn-group">
    //         <button
    //             type="button" 
    //             className="btn btn-secondary"
    //             onClick={() => setEditing(false)}
    //         >
    //             Cancel
    //             <span className="visually-hidden">Renaming {win.text}</span>
    //         </button>
    //         <button type="submit" className="btn btn-primary">
    //             Save
    //             <span className="visually-hidden">New name for {win.text}</span>
    //         </button>
    //         </div>
    //     </form>
    // );
