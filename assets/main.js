let botao = document.querySelector('#btn-dark');
let header = document.querySelector('#cabecalho');
let conteudo = document.querySelector('#conteudo-principal');
let nav = document.querySelectorAll('.nav-menu');
let socials = document.querySelectorAll('.bg-socials');
let iconDark = document.querySelector('.material-icons');
let projetos = document.querySelector('#projetos');
let experiencias = document.querySelector('#experiencias');
let rodape = document.querySelector('#rodape');
let cardProjetos = document.querySelectorAll('.projetos-content');
let ancoraCardProjetos = document.querySelectorAll('.a-projetos-content');
let darkMode = false;

let componentes = [botao, header, conteudo, experiencias];
let componentes2 = [projetos, rodape];

console.log(cardProjetos)
botao.addEventListener('click', () => {
  if (darkMode === false) {
    componentes.forEach(item => {item.classList = 'bg-dark'});
    nav.forEach(item => {item.classList = 'bg-dark'});
    socials.forEach(item => {item.classList = 'bg-dark'});
    componentes2.forEach(item => {item.classList = 'bg-dark2'});
    cardProjetos.forEach(item => {item.classList = 'projetos-content bg-dark'});
    ancoraCardProjetos.forEach(item => {item.classList = 'bg-dark'});
    iconDark.innerText = 'light_mode';
    iconDark.style.color = 'yellow'

    darkMode = true;
  } else {
    componentes.forEach(item => {item.classList = 'bg-light'});
    nav.forEach(item => {item.classList = "bg-light"});
    socials.forEach(item => {item.classList = "bg-light"});
    componentes2.forEach(item => {item.classList = 'bg-light2'});
    cardProjetos.forEach(item => {item.classList = 'projetos-content bg-light'});
    ancoraCardProjetos.forEach(item => {item.classList = 'bg-light'});
    iconDark.innerText = 'dark_mode';
    iconDark.style.color = '#024a56'

    darkMode = false;
  }
});

