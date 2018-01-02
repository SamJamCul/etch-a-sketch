const grid = document.querySelector('.grid');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawGrid(gridsize = 16) {
  for (i = 0; i < gridsize*gridsize; i++) {
    let newdiv = document.createElement('div');
    newdiv.classList.add('square');
    newdiv.addEventListener("mouseover", function(){
      newdiv.style.backgroundColor = getRandomColor();
    })
    grid.appendChild(newdiv);
  }
}

drawGrid()
