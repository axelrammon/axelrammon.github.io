let botao = document.querySelector('#btn-dark');
let header = document.querySelector('#cabecalho');
let socials = document.querySelector('#socials');
let conteudo = document.querySelector('#conteudo-principal');
let link_nav = document.querySelector('a');

let darkMode = false;

botao.addEventListener('click', () => {
  if (darkMode === false) {
    botao.classList = 'bg-dark';
    header.classList = 'bg-dark';
    socials.classList = 'bg-dark';
    conteudo.classList = 'bg-dark';
    link_nav.classList = 'bg-dark';

    darkMode = true;
  } else {
    botao.classList = 'bg-light';
    header.classList = 'bg-light';
    socials.classList = 'bg-light';
    conteudo.classList = 'bg-light';
    link_nav.classList = 'bg-light';

    darkMode = false;
  }
});

console.log(botao)