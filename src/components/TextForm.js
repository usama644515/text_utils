import React, { useState } from 'react';
import './Main.css';
export default function TextForm() {
    // create a state variable using react hook
    const [text, changetext] = useState("");
    let inputvalchange = (val) => {
        changetext(val.target.value);
    }
    let toupperchasepress = event => {
        let newText = text.toUpperCase();
        changetext(newText);
        event.preventDefault();
    }
    let tolowerchasepress = event => {
        let newText = text.toLowerCase();
        changetext(newText);
        event.preventDefault();
    }
    let toreversethestring = event => {
        let newText2 = text.split("").reverse().join("");
        changetext(newText2);
        event.preventDefault();
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputField">Enter your Text</label>
                            <br />
                            <br />
                            <textarea type="text" value={text} onChange={inputvalchange} className="form-control" id="textareaField" rows="4" placeholder="Your text here" />
                        </div>
                        <br />
                        <button className="btn btn-primary btn1" onClick={toupperchasepress}>To UpperCase</button>
                        <button className="btn btn-primary btn1" onClick={tolowerchasepress}>To LoxerCase</button>
                        <button className="btn btn-primary" onClick={toreversethestring}>To Reverse</button>
                    </form>
                    <h2>Summary</h2>
                    <p>letter: {text.length}</p>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
