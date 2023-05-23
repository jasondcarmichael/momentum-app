import { useState } from "react";
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';

const EditWin = ({win, index}) => {
    const id = win.id
    const [updateWin, setUpdateWin] = useState(win.text)

     const handleUpdate = async (e) => {
        e.preventDefault()
        await updateDoc(doc(db, 'wins', id), {
          text: updateWin,
          timestamp: serverTimestamp()
        })
        window.location.reload();
        setUpdateWin("")
      }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${id}`}
                >
                Edit
            </button>

            <div
                className="modal fade"
                id={`id${id}`}
                key={index}
                tabIndex="-1"
                aria-labelledby="editLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editLabel">
                            Update Details for {id}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setUpdateWin("")}
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex" >
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={win}
                                onChange={(e) => setUpdateWin(e.target.value)}
                            />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setUpdateWin("")}
                                >Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={(e) => handleUpdate(e)}
                            >Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditWin;