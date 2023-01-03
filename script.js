const pegaBody = document.getElementsByTagName('body')[0];

const criaH1 = () => {
    const h1DaGalera = document.createElement('h1');
    h1DaGalera.id = 'title';
    h1DaGalera.innerText = 'textinho';
    pegaBody.appendChild(h1DaGalera);
}

const criaParagr = () => {
const paragrDaGalera = document.createElement('p');
paragrDaGalera.id = 'rgb-color'
paragrDaGalera.innerText = '(168,34,1)'
pegaBody.appendChild(paragrDaGalera);
};

window.onload = () => {
    criaH1();
    criaParagr();
};