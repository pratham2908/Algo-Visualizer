import { useEffect } from "react";
import AppendScript from "../../Components/AppendScript";
import "../../Styles/isValid.css";
function isValid(input) {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(') stack.push('(');
        else if (stack.length == 0) return false;
        else stack.pop();
    }
}
const ValidSequence = () => {
    useEffect(() => {
        AppendScript("./isValid.js");
    }, [])
    return (
        <div id="stack-container">
            <div className="input">
                <h1></h1>
                <h2 id='current-input'></h2>
            </div>
        </div>
    )
}

export default ValidSequence;