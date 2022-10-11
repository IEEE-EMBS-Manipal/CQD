let colors = ['salmon', '#F6BD60', '#292F36', '#457B9D'];

function setColor(e) {
    let target = e.target;
    let count = +target.dataset.count;

    if (count == null || count == undefined) {
        count = 0
    }
    let color = colors[count];

    target.style.backgroundColor = color;
    target.dataset.count = ++count;
    if (count == colors.length) {
        target.dataset.count = 0;
    }
}

function updateBox(box, value, color) {
    if (value !== null) {
        box.innerText = value;
    }
    if (color !== null) {
        box.style.backgroundColor = color;
    }
}

function initUpdate() {
    const board = document.getElementsByClassName("board")[0];
    let content = loadContent()

    for (const tile of board.children) {
        let box = tile.children[0];

        // Dispaly box content and default colors
        try {
            let value = content[box.id].value;
            updateBox(box, value, colors[colors.length - 1]);
        } catch (error) { }
        box.dataset.count = 0;
    }
}

window.onload = function () {
    initUpdate();
};

function loadContent() {
    // This is in zero-indexing format
    var content = {
        "0": {
            "value": "A.25"
        },
        "1": {
            "value": "A.25"
        },
        "2": {
            "value": "A.25"
        },
        "3": {
            "value": "A.25"
        },
        "4": {
            "value": "A.25"
        },
        "5": {
            "value": "A.25"
        },
        "6": {
            "value": "A.25"
        },
        "7": {
            "value": "A.25"
        },
        "8": {
            "value": "A.25"
        },
    }
    return content;
}
