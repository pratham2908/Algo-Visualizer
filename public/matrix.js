const matrixBox = document.querySelector('#matrix-parent');
const width = matrixBox.clientWidth;
const height = matrixBox.clientHeight;
const rows = Math.floor(height / 50);
const columns = Math.floor(width / 50);
const matrixNode = [];
let target = null;
let source = null;
let parent = [];
let pathLength = 1;
for (let i = 0; i < rows * columns; i++) {
    parent.push(-1);
}
let startBfsBtn = document.querySelector('#bfs-start');
let pathLengthNode = document.querySelector('#path-length');
startBfsBtn.addEventListener('click', startBfs);
// adds box in the matrix
for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('matrix-row');
    matrixBox.appendChild(row);
    matrixNode.push([]);
    for (let j = 0; j < columns; j++) {
        const box = document.createElement('div');
        box.classList.add('matrix-box');
        row.appendChild(box);
        matrixNode[i].push(box);
        box.setAttribute('row', i);
        box.setAttribute('col', j);
    }
}

// adds obstacles in the matrix
for (let i = 0; i < 20; i++) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * columns);
    matrixNode[row][col].classList.add('obstacle');
}

async function bfs(startRow, startCol) {
    const queue = [{ row: startRow, col: startCol }];
    const visited = new Set();
    visited.add(startRow + ',' + startCol);
    while (queue.length > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            const row = queue[0].row;
            const col = queue[0].col;
            queue.shift();
            let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
            let currIdx = (row * columns) + col;
            for (let dir of dirs) {
                const newRow = row + dir[0];
                const newCol = col + dir[1];
                if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= columns || matrixNode[newRow][newCol].classList.contains("obstacle")) continue;
                if (visited.has(newRow + ',' + newCol)) continue;
                let newIdx = (newRow * columns) + newCol;
                parent[newIdx] = currIdx;

                visited.add(newRow + ',' + newCol);
                queue.push({ row: newRow, col: newCol });
                if (!(newRow === target.row && newCol === target.col))
                    matrixNode[newRow][newCol].classList.add('visited');

            }
        }
        await delayIt(100);
    }
    findParent();
}

function delayIt(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startBfs(e) {
    bfs(source.row, source.col);
}

function setTarget(e) {
    const node = e.target;
    const row = parseInt(node.getAttribute('row'));
    const col = parseInt(node.getAttribute('col'));
    if (node.classList.contains('obstacle')) return;
    node.classList.add('target');
    target = { row, col };

    for (let i in matrixNode) {
        for (let j in matrixNode[i]) {
            matrixNode[i][j].removeEventListener('click', setTarget);
            matrixNode[i][j].addEventListener('click', setSource);
        }
    }
}

function setSource(e) {
    const node = e.target;
    const row = parseInt(node.getAttribute('row'));
    const col = parseInt(node.getAttribute('col'));
    if (node.classList.contains('obstacle')) return;
    node.classList.add('source');
    source = { row, col };

    for (let i in matrixNode) {
        for (let j in matrixNode[i]) {
            matrixNode[i][j].removeEventListener('click', setSource);
        }
    }
}

async function findParent(row = target.row, col = target.col) {
    while (true) {
        let idx = row * columns + col;
        let parentNode = parent[idx];
        row = Math.floor(parentNode / columns);
        col = parentNode % columns;
        if (row === source.row && col === source.col) break;
        matrixNode[row][col].classList.add("path");
        pathLength++;
        pathLengthNode.innerHTML = `Shortest Path : ${pathLength}`;
        await delayIt(100);
    }
    pathLengthNode.innerHTML = `Shortest Path : ${pathLength}`;
}


for (let i in matrixNode) {
    for (let j in matrixNode[i]) {
        matrixNode[i][j].addEventListener('click', setTarget);
    }
}

