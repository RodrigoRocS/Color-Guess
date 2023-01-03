const pegaBody = document.getElementsByTagName('body')[0];

const criaH1 = () => {
  const h1DaGalera = document.createElement('h1');
  h1DaGalera.id = 'title';
  h1DaGalera.innerText = 'Color Guess !';
  pegaBody.appendChild(h1DaGalera);
};

const criaParagrColor = () => {
  const paragrDaGalera = document.createElement('p');
  paragrDaGalera.id = 'rgb-color';
  pegaBody.appendChild(paragrDaGalera);
};

const criaDivBolinha = () => {
  for (let index = 0; index < 6; index += 1) {
    const divBolinha = document.createElement('div');
    divBolinha.className = 'ball';
    pegaBody.appendChild(divBolinha);
  }
  selecBolinha();
};

const rgbSort = () => Math.floor(Math.random() * 255);

const randomDivColor = () => {
  const pegaDivBall = document.getElementsByClassName('ball');
  for (let index = 0; index < pegaDivBall.length; index += 1) {
    pegaDivBall[
      index
    ].style.backgroundColor = `rgb(${rgbSort()}, ${rgbSort()}, ${rgbSort()})`;
  }
  const pegaP2 = document.getElementById('rgb-color');
  pegaP2.innerText = `${selectRandomDiv()}`;
};

const criaParagrResposta = () => {
  const paragrDaGalera = document.createElement('p');
  paragrDaGalera.id = 'answer';
  paragrDaGalera.innerText = 'Escolha uma cor';
  pegaBody.appendChild(paragrDaGalera);
};

const selectRandomDiv = () => {
  const pegaDivBall = document.getElementsByClassName('ball');
  const randomDiv = Math.floor(Math.random() * pegaDivBall.length);
  return String(pegaDivBall[randomDiv].style.backgroundColor);
};

const salvaScore = () => {
  const pegaScore = document.getElementById('score');
  localStorage.setItem('score', pegaScore.innerHTML);
};

const comparaColor = (e) => {
  const pegaP = document.getElementById('answer');
  const pegaP2 = document.getElementById('rgb-color');
  if (e.target.style.backgroundColor === pegaP2.innerText) {
    pegaP.innerText = 'Acertou!';
    const pegaScore = document.getElementById('score');
    pegaScore.innerHTML = +pegaScore.innerHTML + 3;
    salvaScore();
  } else {
    pegaP.innerText = 'Errou! Tente novamente!';
  }
};

const selecBolinha = () => {
  const pegaDivBall = document.getElementsByClassName('ball');
  for (let index = 0; index < pegaDivBall.length; index += 1) {
    pegaDivBall[index].addEventListener('click', comparaColor);
  }
};

const criaBtnReset = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'reset-game';
  btnDaGalera.innerText = 'RESET GAME';
  btnDaGalera.addEventListener('click', randomDivColor);
  btnDaGalera.addEventListener('click', () => {
    const pegaP = document.getElementById('answer');
    pegaP.innerText = 'Escolha uma cor';
  });
  pegaBody.appendChild(btnDaGalera);
};

const criaPlacar = () => {
  const paragrDaGalera = document.createElement('p');
  paragrDaGalera.id = 'score';
  if (localStorage.getItem('score') === null) {
    paragrDaGalera.innerText = 0;
  } else {
    paragrDaGalera.innerHTML = localStorage.getItem('score');
  }
  pegaBody.appendChild(paragrDaGalera);
};

window.onload = () => {
  criaH1();
  criaParagrColor();
  criaPlacar();
  criaDivBolinha();
  randomDivColor();
  criaParagrResposta();
  criaBtnReset();
};
