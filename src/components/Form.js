import { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState('');

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     props.addWin(name);
    //     setName("");
    // }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        // <form onSubmit={handleSubmit}>
            <form>
            <h3 className="label-wrapper">
                <label htmlFor="new-win-input" className="label__lg">
                What I accomplished today:
                </label>
            </h3>
            <input
                type="text"
                id="new-win-input"
                className="input input__lg"
                name="text"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}