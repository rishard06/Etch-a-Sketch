const container = document.querySelector('.container');

for(let i = 1; i <= 16; i++){
  const gridVertical = document.createElement('div');
  gridVertical.style.cssText = "display: flex; justify-content: center;";
  container.appendChild(gridVertical);
  
  for(let i = 1; i <= 16; i++){
    const gridHorizontal = document.createElement('div');
    gridHorizontal.classList.add('horizontal');
    gridVertical.appendChild(gridHorizontal);
  }
} 

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let choice = prompt("how many px per side do you want to see? (max 100px)");
  container.innerHTML = "";
  
  perSide(choice);
});

function perSide(n) {
  if (n > 100) {
    n = 100;
  }else if (n === null || n === "") {
    n = 16;
  }
  for(let i = 1; i <= n; i++) {
    const gridVertical = document.createElement('div');
    gridVertical.style.cssText = "display: flex; justify-content: center;";
    container.appendChild(gridVertical);
    
    for(let i = 1; i <= n; i++){
      const gridHorizontal = document.createElement('div');
      gridHorizontal.classList.add('horizontal');
      // gridHorizontal.textContent = `${i}`;
      gridVertical.appendChild(gridHorizontal);
    }
  }
}