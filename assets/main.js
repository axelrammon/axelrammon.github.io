let botao = document.querySelector('#btn-dark');
let header = document.querySelector('#cabecalho');
let conteudo = document.querySelector('#conteudo-principal');
let nav = document.querySelectorAll('.nav-menu');
let socials = document.querySelectorAll('.bg-socials');
let iconDark = document.querySelector('.material-icons');
let darkMode = false;

botao.addEventListener('click', () => {
  if (darkMode === false) {
    botao.classList = 'bg-dark';
    header.classList = 'bg-dark';
    conteudo.classList = 'bg-dark';
    nav.forEach(item => {item.classList = "bg-dark"});
    socials.forEach(item => {item.classList = "bg-dark"});
    iconDark.innerText = 'light_mode';
    iconDark.style.color = 'yellow'

    darkMode = true;
  } else {
    botao.classList = 'bg-light';
    header.classList = 'bg-light';
    conteudo.classList = 'bg-light';
    nav.forEach(item => {item.classList = "bg-light"});
    socials.forEach(item => {item.classList = "bg-light"});
    iconDark.innerText = 'dark_mode';
    iconDark.style.color = '#024a56'

    darkMode = false;
  }
});

