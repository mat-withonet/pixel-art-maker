
const color = document.getElementById('colorPicker');

const canvas = document.getElementById('pixelCanvas');

const sizePicker = document.getElementById('sizePicker');

let height = document.getElementById("inputHeight");

let width = document.getElementById("inputWidth");



sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid(height, width);
});

function makeGrid(height, width) {
    canvas.innerHTML = '';

    //create table rows

    for (var i = 1; i <= height.value; i++) {
        let rows = document.createElement("tr");

        //create table columns

        for (var j = 1; j <= width.value; j++) {
            let column = document.createElement("td");
            rows.appendChild(column);
        }
        canvas.appendChild(rows);
    }
    // Create new instances of the all document.querySelectorAll("td").

    let tableCells = Array.from(document.querySelectorAll("td"));

    // Each cell should have an event listener that sets the background color of the cell to the selected color.

    tableCells.forEach(function (cell) {
        cell.addEventListener("click", function () {
            this.style.backgroundColor = document.querySelector("#colorPicker").value;
        }, false);
    });
}
