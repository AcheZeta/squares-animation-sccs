// Import stylesheets
import "./style.scss";

let squaresNumber = 12;

const printSquares = () => {
  const container = document.getElementById("container");
  for (let i = 0; i < squaresNumber; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add(`sqr_${i + 1}`);
    newSquare.classList.add(`sqr`);
    container.appendChild(newSquare);
  }
};

printSquares();
