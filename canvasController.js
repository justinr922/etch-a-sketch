// Execute a function when the user releases a key on the keyboard
document.querySelector('#heightWidth').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector('#heightWidthSubmit').click();
    }
  }); 

document.querySelector('#heightWidthSubmit').addEventListener('click',
    function() {
        let heightWidth = document.querySelector('#heightWidth').value;
        clearCanvas();
        generateCanvas(heightWidth);
    }
)

let colorCheck = document.querySelector("#randomColor");
let crazyFunTimeCheck = document.querySelector("#crazyFunTime");
let crazyFunTimeRepeater;
crazyFunTimeCheck.addEventListener('change', function() {
    console.log(crazyFunTimeCheck.checked)
    if (crazyFunTimeCheck.checked) {
        crazyFunTimeRepeater = setInterval(crazyFunTime, 500);
    } else {
        clearInterval(crazyFunTimeRepeater);
    }
})

function createHover(object) {
    object.addEventListener('mouseenter', function() {
        changeColor(object)
    })
}

function changeColor(object) {
        if (colorCheck.checked) {
            let randomColor = '#' + Math.floor(Math.random()*16777216).toString(16)
            object.style.backgroundColor = randomColor;
        } else {
        object.style.backgroundColor = '#000000'
        }
}

function generateCanvas(n) {
    let canvas = document.querySelector('#sketchBoard');
    for (let row = 0; row < n; row++) {
        let row = document.createElement('div');
        row.classList.add('row');
        canvas.appendChild(row);
        for (let column = 0; column < n; column++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
            createHover(cell);
        }
    }
}

function clearCanvas() {
    let canvas = document.querySelector('#sketchBoard');
    while (canvas.firstChild) {
        canvas.lastChild = null;
        canvas.removeChild(canvas.lastChild);

    }
}

function crazyFunTime() {
    let rows = document.querySelector('#sketchBoard').children;
    console.log(rows)
    for (const row of rows) {
        let cells = row.children;
        for (const cell of cells) {
            changeColor(cell);
        }
    };
}