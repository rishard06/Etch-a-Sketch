const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let choice = prompt("how many px per side? (max 100px)");
  container.innerHTML = "";
  
  squareSize(choice);
});

squareSize(16);

function squareSize(n) {
  if (n > 100) {
    n = 100;
  }else if (n === null || n === "") {
    n = 16;
  }
  
const vertical = [];
const horizontal = [];

const clearBG = document.querySelector('.clear');
clearBG.addEventListener('click', () => {
  horizontal.forEach(horizon =>  {
    horizon.style.backgroundColor = "white";
    horizon.style.opacity = "";
  });
});

const randomColor = document.querySelector('.random');
randomColor.addEventListener('click', () => {
  horizontal.forEach(horizon => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    horizon.addEventListener('click', () => {
      horizon.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
});

const transparent = document.querySelector('.transparent');
transparent.addEventListener('click', () => {
  horizontal.forEach(horizon => {
    horizon.addEventListener('click', () => {
      horizon.style.backgroundColor = "black";
      horizon.style.opacity = 0.3;
      let opacity = horizon.style.opacity;
      if (opacity == 0.3) {
        horizon.addEventListener('click', () => {
        horizon.style.opacity = parseFloat(opacity) + 0.3;
        });
      }
      if (opacity == 0.6) {
          horizon.addEventListener('click', () => {
          horizon.style.opacity = parseFloat(opacity) + 0.3;
          console.log(horizon.style.opacity);
          });
      }
    });
  });
});
  
  for(let i = 1; i <= n; i++){
    const gridVertical = document.createElement('div');
    gridVertical.classList.add('vertical');
    gridVertical.style.cssText = "display: flex; justify-content: center;";
    container.appendChild(gridVertical);
    vertical.push(gridVertical);
    for(let i = 1; i <= n; i++){
      const gridHorizontal = document.createElement('div');
      const size = (600 - (n * 2)) / n;
      gridHorizontal.classList.add('horizontal');
      gridHorizontal.style.width = `${size}px`;
      gridHorizontal.style.height = `${size}px`;
      gridHorizontal.style.justifyContent = "center";
      gridHorizontal.addEventListener('click', () => {
        gridHorizontal.style.backgroundColor = "black";
      });
      
      gridVertical.appendChild(gridHorizontal);
      horizontal.push(gridHorizontal);
    }
  }
}  

