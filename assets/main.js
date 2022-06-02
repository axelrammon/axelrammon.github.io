let botao = document.querySelector('#btn-dark');
let header = document.querySelector('#cabecalho');
let conteudo = document.querySelector('#conteudo-principal');
let link_nav1 = document.querySelector('#nav1');
let link_nav2 = document.querySelector('#nav2');
let link_nav3 = document.querySelector('#nav3');

let darkMode = false;

botao.addEventListener('click', () => {
  if (darkMode === false) {
    botao.classList = 'bg-dark';
    header.classList = 'bg-dark';
    conteudo.classList = 'bg-dark';
    link_nav1.classList = 'bg-dark';
    link_nav2.classList = 'bg-dark';
    link_nav3.classList = 'bg-dark';

    darkMode = true;
  } else {
    botao.classList = 'bg-light';
    header.classList = 'bg-light';
    conteudo.classList = 'bg-light';
    link_nav1.classList = 'bg-light';
    link_nav2.classList = 'bg-light';
    link_nav3.classList = 'bg-light';

    darkMode = false;
  }
});

