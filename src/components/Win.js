import { useState } from "react"

export default function Win(props) {
    const [isEditing, setEditing] = useState(false);

    const editingForm = (
        <form className="stack-small">
            <div className="form-group">
            <label className="win-label" htmlFor={props.id}>
                New name for {props.name}
            </label>
            <input id={props.id} className="win-text" type="text" />
            </div>
            <div className="btn-group">
            <button type="button" className="btn win-cancel">
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
                <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button 
                    type="button" 
                    className="btn btn__danger"
                    onClick={() => props.deleteWin(props.id)}>
                Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );

    return <li className="win">{isEditing ? editingForm : viewWin}</li>;



    // return (
    //     <li className="win stack-small">
    //         <div className="c-cb">
    //             <input 
    //                 id={props.id}
    //                 type="checkbox" 
    //                 defaultChecked={true}
    //             />
    //             <label className="win-label" htmlFor={props.id}>
    //                 {props.name}
    //             </label>
    //         </div>
    //         <div className="btn-group">
    //             <button type="button" className="btn">
    //             Edit <span className="visually-hidden">{props.name}</span>
    //             </button>
    //             <button 
    //                 type="button" 
    //                 className="btn btn__danger"
    //                 onClick={() => props.deleteWin(props.id)}>
    //             Delete <span className="visually-hidden">{props.name}</span>
    //             </button>
    //         </div>
    //     </li>
    // )
}