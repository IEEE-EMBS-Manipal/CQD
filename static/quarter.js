let colors = ["red", "blue", "green", "orange", "skyblue", "black"];
let colorsX = ["red", "blue", "green", "orange"];
let X = 0;
let scoreElement
let newKey = 0;
let check=false;
let blackout=false;

//Undo functions

function undo(team) {
    let teamElement = document.getElementById("team-" + team);
    scoreElement = document.getElementById("team-score-" + team);
    score = Number(scoreElement.innerText);
    score = score - 2*points;
    scoreElement.innerText = score;
    check=true;
}

function undoColor(target) {
    target.style.backgroundColor=colors[4];
    return 0;
}

//Blackout functions

function black(team){
    let teamElement = document.getElementById("team-" + team);
    scoreElement = document.getElementById("team-score-" + team);
    score = Number(scoreElement.innerText);
    score = score - points;
    scoreElement.innerText = score;
    blackout=true;
}

function blackColor(target) {
    target.style.backgroundColor=colors[5];
    return 0;
}

function setColor(e) {
    let target = e.target;
    let count = +target.dataset.count;
    if (count == null || count == undefined) {
        count = 0
    }
    target.style.backgroundColor=colorsX[newKey - 1];

    if(check) {
        
        undoColor(target);
        check=false;
    }
    if(blackout) {
        blackColor(target);
        blackout=false;
    }

    // Update scores
    content = target.innerText;
    points = Number(content.split(".")[1]);

    if (X < 5) {
        scoreElement = document.getElementById("team-score-" + (newKey));
        score = Number(scoreElement.innerText);
        score = score + points;
        scoreElement.innerText = score;
    }
}


function teamSelect(team) {
    let teamElement = document.getElementById("team-" + team);
    teamElement.style.backgroundColor = colors[team - 1];

    if (teamElement.dataset.init !== "0") {
        teamElement.style.opacity = 1;
        teamElement.style.border = "5px solid gold";
        teamElement.dataset.init = "0";
    } else {
        teamElement.style.opacity = 0.9;
        teamElement.style.border = "";
        teamElement.dataset.init = "1";
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

window.onload = function () {
    const board = document.getElementsByClassName("board")[0];
    let content = loadContent()

    for (const tile of board.children) {
        let box = tile.children[0];

        // Dispaly box content and default colors
        try {
            let value = content[box.id].value;
            updateBox(box, value, colors[colors.length - 2]);

            if (box.id == '40') {
                updateBox(box, null, 'gold');
            }
        } catch (error) { }
        box.dataset.count = 0;
    }

    // Team init
    for (team of ["1", "2", "3", "4"]) {
        let teamElement = document.getElementById("team-" + team);
        teamElement.style.backgroundColor = colors[team - 1];

        if (teamElement.dataset.init !== "0") {
            teamElement.style.opacity = 1;
            teamElement.style.border = "5px solid gold";
            teamElement.dataset.init = "0";
        } else {
            teamElement.style.opacity = 0.9;
            teamElement.style.border = "";
            teamElement.dataset.init = "1";
        }
    }
};

document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (["1", "2", "3", "4"].includes(key)) {
        teamSelect(key);
        newKey = key;
    }
    if(["z"].includes(key)) {
        undo(newKey);
        // check=undoColor();
    }
    if(["b"].includes(key)) {
        black(newKey);
        // check=undoColor();
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
