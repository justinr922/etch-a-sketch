document.querySelector('#heightWidthSubmit').addEventListener('click',
    function() {
        let heightWidth = document.querySelector('#heightWidth').value;
        clearCanvas();
        generateCanvas(heightWidth);
    }
)

function createHover(object) {
    object.addEventListener('mouseenter', function() {
        object.style.backgroundColor = '#000000'
    })
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