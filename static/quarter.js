let colors = ["red", "blue", "green", "orange", "skyblue"];

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

    // Update scores
    content = target.innerText;
    points = Number(content.split(".")[1]);
    console.log(points);

    if (count < 5) {
        let scoreElement = document.getElementById("team-score-" + (count));
        score = Number(scoreElement.innerText);
        console.log(score);
        score = score + points;
        scoreElement.innerText = score;
    }
}

function teamSelect(team) {
    let teamElement = document.getElementById("team-" + team);
    teamElement.style.backgroundColor = colors[team - 1];
}

function updateBox(box, value, color) {
    if (value !== null) {
        box.innerText = value;
    }
    if (color !== null) {
        box.style.backgroundColor = color;
    }
}

window.onload = function () {
    const board = document.getElementsByClassName("board")[0];
    let content = loadContent()

    for (const tile of board.children) {
        let box = tile.children[0];

        // Dispaly box content and default colors
        try {
            let value = content[box.id].value;
            updateBox(box, value, colors[colors.length - 1]);

            if (box.id == '40') {
                updateBox(box, null, 'gold');
            }
        } catch (error) { }
        box.dataset.count = 0;
    }

    for (team of ["1", "2", "3", "4"]) {
        teamSelect(team);
    }
};

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (["1", "2", "3", "4"].includes(key)) {
        teamSelect(key);
    }
}, false);

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
        "9": {
            "value": "A.25"
        },
        "10": {
            "value": "A.25"
        },
        "11": {
            "value": "A.25"
        },
        "12": {
            "value": "A.25"
        },
        "13": {
            "value": "A.25"
        },
        "14": {
            "value": "A.25"
        },
        "15": {
            "value": "A.25"
        },
        "16": {
            "value": "A.25"
        },
        "17": {
            "value": "A.25"
        },
        "18": {
            "value": "A.25"
        },
        "19": {
            "value": "A.25"
        },
        "20": {
            "value": "A.25"
        },
        "21": {
            "value": "A.25"
        },
        "22": {
            "value": "A.25"
        },
        "23": {
            "value": "A.25"
        },
        "24": {
            "value": "A.25"
        },
        "25": {
            "value": "A.25"
        },
        "26": {
            "value": "A.25"
        },
        "27": {
            "value": "A.25"
        },
        "28": {
            "value": "A.25"
        },
        "29": {
            "value": "A.25"
        },
        "30": {
            "value": "A.25"
        },
        "31": {
            "value": "A.25"
        },
        "32": {
            "value": "A.25"
        },
        "33": {
            "value": "A.25"
        },
        "34": {
            "value": "A.25"
        },
        "35": {
            "value": "A.25"
        },
        "36": {
            "value": "A.25"
        },
        "37": {
            "value": "A.25"
        },
        "38": {
            "value": "A.25"
        },
        "39": {
            "value": "A.25"
        },
        "40": {
            "value": "100"
        },
        "41": {
            "value": "A.25"
        },
        "42": {
            "value": "A.25"
        },
        "43": {
            "value": "A.25"
        },
        "44": {
            "value": "A.25"
        },
        "45": {
            "value": "A.25"
        },
        "46": {
            "value": "A.25"
        },
        "47": {
            "value": "A.25"
        },
        "48": {
            "value": "A.25"
        },
        "49": {
            "value": "A.25"
        },
        "50": {
            "value": "A.25"
        },
        "51": {
            "value": "A.25"
        },
        "52": {
            "value": "A.25"
        },
        "53": {
            "value": "A.25"
        },
        "54": {
            "value": "A.25"
        },
        "55": {
            "value": "A.25"
        },
        "56": {
            "value": "A.25"
        },
        "57": {
            "value": "A.25"
        },
        "58": {
            "value": "A.25"
        },
        "59": {
            "value": "A.25"
        },
        "60": {
            "value": "A.25"
        },
        "61": {
            "value": "A.25"
        },
        "62": {
            "value": "A.25"
        },
        "63": {
            "value": "A.25"
        },
        "64": {
            "value": "A.25"
        },
        "65": {
            "value": "A.25"
        },
        "66": {
            "value": "A.25"
        },
        "67": {
            "value": "A.25"
        },
        "68": {
            "value": "A.25"
        },
        "69": {
            "value": "A.25"
        },
        "70": {
            "value": "A.25"
        },
        "71": {
            "value": "A.25"
        },
        "72": {
            "value": "A.25"
        },
        "73": {
            "value": "A.25"
        },
        "74": {
            "value": "A.25"
        },
        "75": {
            "value": "A.25"
        },
        "76": {
            "value": "A.25"
        },
        "77": {
            "value": "A.25"
        },
        "78": {
            "value": "A.25"
        },
        "79": {
            "value": "A.25"
        },
        "80": {
            "value": "A.25"
        }
    }
    return content;
}
