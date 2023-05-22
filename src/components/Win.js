import EditWin from "./EditWin";

export default function Win({ win, deleteWin, editWin }) {

    return (
        <div className="win-item">
            <p className="win-label">{win.text}</p>
            
            <div className="button-group">
                <EditWin win={win} id={win.id} editWin={editWin}/>
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

// className="c-cb"
// className="float-end"