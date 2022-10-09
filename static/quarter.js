function setColor(e) {
    let target = e.target;
    let count = +target.dataset.count;
    console.log(count);

    switch (count) {
        case 0:
            color = 'white';
            break;

        case 1:
            color = 'red';
            break;

        case 2:
            color = 'blue';
            break;

        case 3:
            color = 'green';
            break;

        default:
            color = 'gray';
            count = -1;
            break;
    }

    target.style.backgroundColor = color;
    target.dataset.count = ++count;
}

function updateBox(box, value) {
    box.value = value;
}

function initUpdate() {
    const board = document.getElementsByClassName("board")[0];

    for (const tile of board.children) {
        let box = tile.children[0];

        // let value = content[box.id];
        // box.value = updateBox(box, value);

        box.style.backgroundColor = 'gray';
        box.dataset.count = 0;
    };

    let content = JSON.parse();
    console.log(content);
}

window.onload = function () {
    initUpdate();
};
