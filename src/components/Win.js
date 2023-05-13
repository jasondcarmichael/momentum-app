export default function Win(props) {
    return (
        <li className="win stack-small">
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

        </li>

    )
}