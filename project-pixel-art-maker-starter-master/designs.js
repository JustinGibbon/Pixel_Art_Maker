// Select color input
//Defining my variables
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');

height = document.getElementById('inputHeight').value;
width = document.getElementById('inputWidth').value;
makeGrid(height, width);

//adding event listeners for the table
sizePicker.addEventListener('click', (e) => { //adding a event listener for the submit button
    e.preventDefault();  //prevents the page from refreshing instantly
    height = document.getElementById('inputHeight').value;
    width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove(); //making a new grid each time you submit
    makeGrid(height, width);
});
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {  //The make grid function  that adds a cell or a row depending on what you select
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', (e) => {
                cell.style.backgroundColor = color.value;  //event listner for the coloring of the table when you click on it
            })
        }
    }
}
