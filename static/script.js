function setColor(e) {
    var target = e.target,
        count = +target.dataset.count;

    target.style.backgroundColor = count === 1 ? "#ff0000" : '#8a2be2';
    target.dataset.count = count === 1 ? 0 : 1;
}
