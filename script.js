const grid = document.querySelector('.grid');
let gridsize = 16;

function drawGrid(gridsize = 16) {
  for (i = 0; i < gridsize*gridsize; i++) {
    let newdiv = document.createElement('div');
    newdiv.classList.add('square');
    newdiv.addEventListener("mouseover", function(){
      newdiv.style.backgroundColor = "red";
    })
    grid.appendChild(newdiv);
  }
}



drawGrid()
