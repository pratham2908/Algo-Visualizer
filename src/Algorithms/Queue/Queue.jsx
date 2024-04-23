import { useEffect } from "react";
import "../../Styles/Queue/Queue.css";

const Queue = () => {
    useEffect(() => {

    }, [])

    function addToQueue() {
        let value = document.getElementById("queue-input").value;
        let queueBox = document.getElementById("queue-box");
        let newDiv = document.createElement("div");
        newDiv.classList.add("queue-item");
        newDiv.innerHTML = value;
        queueBox.appendChild(newDiv);
        newDiv.classList.add("appear");
        document.getElementById("queue-input").value = "";
    }

    function removeFromQueue() {
        let queueBox = document.getElementById("queue-box");
        if (queueBox.children.length === 0) return;
        let firstChild = queueBox.querySelectorAll(".queue-item")[0];
        if (firstChild) {
            firstChild.classList.add("disappear");
            setTimeout(() => {
                queueBox.removeChild(firstChild);
            }, 1000);
        }
    }

    function clearQueue() {
        let queueBox = document.getElementById("queue-box");
        let children = queueBox.querySelectorAll(".queue-item");
        children.forEach(child => {
            child.classList.add("disappear");
            setTimeout(() => {
                queueBox.removeChild(child);
            }, 1000);
        })
    }

    function peekQueue() {
        let queueBox = document.getElementById("queue-box");
        if (queueBox.children.length === 0) return;
        let firstChild = queueBox.querySelectorAll(".queue-item")[0];
        if (firstChild) {
            firstChild.classList.add("selected");
            setTimeout(() => {
                firstChild.classList.remove("selected");
            }, 1500);
        }
    }

    return (
        <div id="queue-container">
            <h1> Queue</h1>
            <div className="queue-data">
                <div id="queue-box">
                </div>
                <form id='queue-form' onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="push-data">
                        <input type="text" id="queue-input" placeholder="Enter a value" />
                        <button id="queue-add" onClick={addToQueue}>Add</button>
                    </div>
                    <div className="rest-buttons">
                        <button id="queue-remove" onClick={removeFromQueue}>Remove</button>
                        <button id="queue-clear" onClick={clearQueue}>Clear</button>
                        <button id="queue-peek" onClick={peekQueue}>Peek</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Queue;