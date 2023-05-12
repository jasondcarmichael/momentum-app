import { useState } from "react";

export default function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
     }

    function handleSubmit(e) {
        e.preventDefault();
        props.addWin(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
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
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}