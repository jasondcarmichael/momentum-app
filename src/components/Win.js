import EditWin from "./EditWin";

export default function Win({ win, deleteWin, index, editWin }) {
   

    return (
        <div className="win-item" key={index}>
            <p className="win-label">{win.text}</p>
            <div className="button-group">
                <EditWin win={win} key={index}/>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={() => deleteWin(win.id)}
                >
                Delete <span className="visually-hidden">{win.text}</span>
                </button>
            </div>
        </div>
    );     
}


/// PsuedoCode
/// When I click EDIT, the Text and Id of the Win should go into the EDIT modal.
/// Where is the WIN and ID being stored?
/// win={win.text} id={win.id} editWin={editWin}
