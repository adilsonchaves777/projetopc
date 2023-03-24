function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

////////////////////////////////////////////////////////////

const logo = document.querySelector('#darkmode');
const container = document.querySelector('body');
const texto = document.querySelectorAll('.titulo-principal');
const conteudo = document.querySelectorAll('.grid-imagens div');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

console.log(container);

function darkMode() {
  container.classList.toggle('active');
  texto.forEach((texto) => {
    texto.classList.toggle('active');
  });
  conteudo.forEach((conteudo) => {
    conteudo.classList.toggle('active');
  });
  header.classList.toggle('active');
  footer.classList.toggle('active');
}

logo.addEventListener('click', darkMode);

darkMode();
