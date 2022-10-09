function setColor(e) {
    let target = e.target;
    let count = +target.dataset.count;

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
            count = 0
            break;
    }

    target.style.backgroundColor = color;
    target.dataset.count = count++;
}

function updateBox(box, value) {
    box.value = value;
}

function initUpdate() {
    let board = document.querySelector("board");
    let content = JSON.parse("quarter.json");

    for (const tile of board.childNodes) {
        let box = tile.firstChild;
        // let value = content[box.id];

        // box.value = updateBox(box, value);
        
        box.style.backgroundColor = 'white';
        box.dataset.count = 0;
    };
}
