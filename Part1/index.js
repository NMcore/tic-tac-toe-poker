let progress = []

function play(e) {
    let player = document.getElementById('player')
    let sel = document.getElementById(e)

    if (player.innerText === 'X') {
        player.innerText = 'O';
        sel.innerText = 'O'
        progress[e] = 'O'
    } else {
        player.innerText = 'X';
        sel.innerText = 'X'
        progress[e] = 'X'
    }

    let topLeft = progress[0];
    let topCenter = progress[1];
    let topRight = progress[2];
    let middleLeft = progress[3];
    let middleCenter = progress[4];
    let middleRight = progress[5];
    let bottomLeft = progress[6];
    let bottomCenter = progress[7];
    let bottomRight = progress[8];
    let boardFull = true;

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        return alert(`The winner is ${topLeft}`);
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        return alert(`The winner is ${middleLeft}`);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        return alert(`The winner is ${bottomLeft}`);
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        return alert(`The winner is ${topLeft}`);
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        return alert(`The winner is ${topCenter}`);
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        return alert(`The winner is ${topRight}`);
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        return alert(`The winner is ${topLeft}`);
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        return alert(`The winner is ${bottomLeft}`);
    }

    for (var i = 0; i <= 8; i++) {
        if (progress[i] === undefined) {
            boardFull = false;
        }
    } if (boardFull === true) {
        alert("I don't know what CAT's means, but you are CATS!")
    }
    console.log(progress)
}
