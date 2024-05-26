const container = document.querySelector('.container');


function squareSize(n) {
  if (n > 100) {
    n = 100;
  }else if (n === null || n === "") {
    n = 16;
  }
  
  for(let i = 1; i <= n; i++){
    
    
    const gridVertical = document.createElement('div');
    gridVertical.classList.add('vertical');
    gridVertical.style.cssText = "display: flex; justify-content: center;";
    container.appendChild(gridVertical);
    
    for(let i = 1; i <= n; i++){
      const size = (600 - (n * 2)) / n;
      const gridHorizontal = document.createElement('div');
      gridHorizontal.classList.add('horizontal');
      gridHorizontal.style.width = `${size}px`;
      gridHorizontal.style.height = `${size}px`;
      gridHorizontal.style.justifyContent = "center";
      gridVertical.appendChild(gridHorizontal);
    }
  } 
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let choice = prompt("how many px per side? (max 100px)");
  container.innerHTML = "";
  
  squareSize(choice);
});

squareSize(16);
