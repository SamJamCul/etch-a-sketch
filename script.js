const grid = document.querySelector('.grid');
let currentGrid;
document.getElementById("clear").onclick = function() {
  drawGrid(currentGrid);
};
document.getElementById("sketch").onclick = function() {
  drawGrid(prompt("How many rows by columns?", currentGrid));
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawGrid(gridsize = 16) {
  clearGrid();
  currentGrid = gridsize;
  document.body.style.setProperty('--columnNumber', gridsize);
  for (i = 0; i < gridsize*gridsize; i++) {
    let newdiv = document.createElement('div');
    newdiv.classList.add('square');
    newdiv.addEventListener("mouseover", function(){
      newdiv.style.backgroundColor = getRandomColor();
    })
    grid.appendChild(newdiv);
  }
}

function clearGrid() {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
}

drawGrid()
