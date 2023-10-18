import { useState, useEffect } from 'react'
const HomePage = () => {
    useEffect(() => {
        let arr = ['Array', 'Graph', 'Tree', 'Linked List', 'Searching & Sorting', 'Dynamic Programming', 'Greedy Algorithm', 'Recursion & Backtracking', 'Bit Manipulation', 'Stack & Queue', 'Heap', 'Hashing', 'String', 'Matrix', 'Divide and Conquer', 'Advanced Algorithms'];

        let container = document.getElementById('home-page-card-container');
        for (let i in arr) {
            const el = document.createElement("div");
            el.classList.add('card');
            el.innerHTML = arr[i];
            container.appendChild(el);
        }
    }, [])
    return (
        <div id="home-page">
            <div id='home-page-header'>
                <div className="title">
                    <h1>Algorithm Visualizer</h1>
                </div>
            </div>
            <div id='home-page-card-container'>
            </div>
        </div>
    )
}

export default HomePage