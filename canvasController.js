document.querySelector('#heightWidthSubmit').addEventListener('click',
    function() {
        let heightWidth = document.querySelector('#heightWidth').value;
        clearCanvas();
        generateCanvas(heightWidth);
    }
)

function generateCanvas(n) {
    let canvas = document.querySelector('#sketchBoard');
    for (let row = 0; row < n; row++) {
        let row = document.createElement('div');
        row.classList.add("canvasRow");
        canvas.appendChild(row);
        for (let column = 0; column < n; column++) {
            let cell = document.createElement('div');
            cell.classList.add('canvasColumn');
            row.appendChild(cell);
        }
        console.log('Adding Row: ', row+1);
    }
}

function clearCanvas() {
    let canvas = document.querySelector('#sketchBoard');
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}