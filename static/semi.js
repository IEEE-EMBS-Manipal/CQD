function setColor(e) {
    let target = e.target;
    let count = +target.dataset.count;

    switch (count) {
        case 0:
            color = 'salmon';
            break;

        case 1:
            color = '#F6BD60';
            break;

        case 2:
            color = '#292F36';
            break;

        default:
            color = '#457B9D';
            count = -1;
            break;
    }

    target.style.backgroundColor = color;
    target.dataset.count = ++count;
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
            updateBox(box, value, '#457B9D');

            if (box.id == '40') {
                updateBox(box, null, 'gold');
            }
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
