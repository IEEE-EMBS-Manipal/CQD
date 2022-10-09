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
    box.innerText = value;
}

function initUpdate() {
    const board = document.getElementsByClassName("board")[0];
    let content = loadContent()

    for (const tile of board.children) {
        let box = tile.children[0];

        try {
            let value = content[box.id].value;
            box.value = updateBox(box, value);
        } catch (error) { }

        box.style.backgroundColor = 'gray';
        box.dataset.count = 0;
    };
}

window.onload = function () {
    initUpdate();
};

function loadContent() {
    var content = {
        "0": {
            "value": "A.25"
        },
        "1": {
            "value": "B.55"
        }
    }
    return content;
}
