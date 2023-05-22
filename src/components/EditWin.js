import { useState } from "react";
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/firebase.config';

const EditWin = ({win}) => {
    const [updateWin, setUpdateWin] = useState([])
    
    function handleChange(e) {
        setUpdateWin(e.target.value);
     }

     const handleUpdate = async (e) => {
        e.preventDefault()
        await updateDoc(doc(db, 'wins', win.id), {
          text: updateWin,
          timestamp: serverTimestamp()
        })
        window.location.reload();
        setUpdateWin("")
      }

      const handleEdit = (win) => {
        console.log(win.text)
      }

    //   const handleCancel = () => {
    //     setUpdateWin("")
    //   }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                win={win}
                onClick={handleEdit}
                >
                Edit
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="editLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                            className="modal-title"
                            id="editLabel">
                            Update Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                // onClick={handleCancel}
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex" >
                            <input
                                type="text"
                                className="form-control"
                                placeholder={win.text}
                                onChange={handleChange}
                            />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleUpdate}
                            >Update Win</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditWin;