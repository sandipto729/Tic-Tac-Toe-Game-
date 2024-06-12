let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let xWinner = document.querySelector("#xwinner");
let oWinner = document.querySelector("#owinner");
let draw = document.querySelector("#draw");
let turn0 = true;

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turn0) {
                box.innerText = "X";
                box.style.color = "black";
                turn0 = false;
            } else {
                box.innerText = "O";
                box.style.color = "red";
                turn0 = true;
            }
            box.disabled = true;
            if (checkWinner()) {

                setTimeout(() => {
                    reset.click();
                },5000)
                return;
            } else if (isDraw()) {
                setTimeout(() => {
                    reset.click();
                },5000)
                
                return;
            }
        }
    });
});

function isDraw() {
    for (let i = 0; i < box.length; i++) {
        if (!box[i].disabled) {
            return false;
        }
    }
    draw.style.visibility = "visible";
    
    return true;
}

function checkWinner() {
    for (let i = 0; i < win.length; i++) {
        let [a, b, c] = win[i];
        if (box[a].innerHTML === "X" && box[b].innerHTML === "X" && box[c].innerHTML === "X") {
            xWinner.style.visibility = "visible";
            
            return true;
        }
        if (box[a].innerHTML === "O" && box[b].innerHTML === "O" && box[c].innerHTML === "O") {
            oWinner.style.visibility = "visible";
            
            return true;
        }
    }
    return false;
}

let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    box.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });

    xWinner.style.visibility = "hidden";
    oWinner.style.visibility = "hidden";
    draw.style.visibility = "hidden";
    turn0 = true;
});
