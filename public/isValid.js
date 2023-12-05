/* eslint-disable eqeqeq */
async function isValid(input) {
    let stack = [];
    divideInSpan(input);
    const elements = document.querySelectorAll(".input h1 span");
    for (let i = 0; i < input.length; i++) {
        colorCurrElement(i, elements);
        if (input[i] == '(') {
            stack.push('(');
            currentInputBox.innerHTML = "(";
            await visualize(true);
        } else if (stack.length == 0) return false;
        else {
            stack.pop();
            currentInputBox.innerHTML = ")";
            await visualize(false);
        }
        await delayIt();
    }
    return stack.length == 0;
}

function colorCurrElement(i, elements) {
    elements.forEach(el => { el.style.color = "black" });
    elements[i].style.color = "red";

}

function divideInSpan(input) {
    let array = input.split("");
    for (let i in array) {
        array[i] = `<span>${array[i]}</span>`;
    }
    inputBox.children[0].innerHTML = array.join("");
    return array;
}

// createElement, append
// selector- 
// style change, value change, property change
const stackElement = document.createElement("div");
const stackContainer = document.getElementById("stack-container");
const inputBox = document.querySelector(".input");
const currentInputBox = document.getElementById("current-input");
stackElement.classList.add("container");
stackContainer.appendChild(stackElement);
let entries = [];
async function visualize(isPushing) {
    if (isPushing) {
        const entry = document.createElement("div");
        entry.classList.add("entry");
        stackElement.prepend(entry);
        entry.classList.add("push");
        entries.push(entry);
    } else {
        entries[entries.length - 1].classList.add("pop");
        await delayIt();
        stackElement.removeChild(entries[entries.length - 1]);
        entries.pop();
    }
}

function delayIt(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log(isValid("()((((())))()()"));
