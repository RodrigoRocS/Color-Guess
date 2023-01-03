const pegaBody = document.getElementsByTagName('body')[0];

const criaH1 = () => {
  const h1DaGalera = document.createElement('h1');
  h1DaGalera.id = 'title';
  h1DaGalera.innerText = 'textinho';
  pegaBody.appendChild(h1DaGalera);
};

const criaParagr = () => {
  const paragrDaGalera = document.createElement('p');
  paragrDaGalera.id = 'rgb-color';
  paragrDaGalera.innerText = '(168,34,1)';
  pegaBody.appendChild(paragrDaGalera);
};

const criaDivBolinha = () => {
  for (let index = 0; index < 6; index += 1) {
    const divBolinha = document.createElement('div');
    divBolinha.className = 'ball';
    pegaBody.appendChild(divBolinha);
  }
};

const rgbSort = () => Math.floor(Math.random() * 255);

const randomDivColor = () => {
  const pegaDivBall = document.getElementsByClassName('ball');
  for (let index = 0; index < pegaDivBall.length; index += 1) {
    pegaDivBall[index].style.backgroundColor = `rgb(${rgbSort()}, ${rgbSort()}, ${rgbSort()})`;
  }
};

window.onload = () => {
  criaH1();
  criaParagr();
  criaDivBolinha();
  randomDivColor();
};
