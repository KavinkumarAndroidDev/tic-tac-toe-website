let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let winningPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[2, 5, 8],
	[6, 7, 8],
	[3, 4, 5],
	[1, 4, 7],
	[0, 4, 8],
	[2, 4, 6],
];

//X player
let xTurn = true;
let count = 0;

//disable buttons
// ...

// disable buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

// enable all
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false; // Changed "false" to false
    });
    popupRef.classList.add("hide");
};

// execute player win
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins"; // Updated to 'O' Wins
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F389; <br> It's a Draw";
};

// new game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

// win logic
const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
}

// display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // Display 'X'
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            // Display 'O'
            element.innerText = "O"; // Updated to 'O'
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winChecker();
    });
});

window.onload = enableButtons;
