import { useEffect } from "react";
import AppendScript from "../../Components/AppendScript";
import "../../Styles/Stack/Stack.css";


const Stack = () => {
    useEffect(() => {

    }, [])

    function pushToContainer(value) {
        let stackBox = document.getElementById("stack-box");
        let newDiv = document.createElement("div");
        newDiv.classList.add("stack-item");
        newDiv.innerHTML = value;
        stackBox.appendChild(newDiv);
    }
    return (
        <div id="stack-container">
            <h1> Stack</h1>
            <div id="stack-box"></div>
            <form id='stack-form' onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" id="stack-input" placeholder="Enter a number" />
                <button id="stack-push" onClick={() => {
                    let value = document.getElementById("stack-input").value;
                    pushToContainer(value);
                }}>Push</button>
                <button id="stack-pop">Pop</button>
                <button id="stack-clear">Push</button>
            </form>
        </div>
    )
}

export default Stack;