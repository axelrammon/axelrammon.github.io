let botao = document.querySelector('#btn-dark');
let header = document.querySelector('#cabecalho');
let conteudo = document.querySelector('#conteudo-principal');
let link_nav1 = document.querySelector('#nav1');
let link_nav2 = document.querySelector('#nav2');
let link_nav3 = document.querySelector('#nav3');
let socials1 = document.querySelectorAll('i')[0];
let socials2 = document.querySelectorAll('i')[1];
let socials3 = document.querySelectorAll('i')[2];
let socials4 = document.querySelectorAll('i')[3];

let darkMode = false;

botao.addEventListener('click', () => {
  if (darkMode === false) {
    botao.classList = 'bg-dark';
    header.classList = 'bg-dark';
    conteudo.classList = 'bg-dark';
    link_nav1.classList = 'bg-dark';
    link_nav2.classList = 'bg-dark';
    link_nav3.classList = 'bg-dark';
    socials1.style.color = '#ecf0f1';
    socials2.style.color = '#ecf0f1';
    socials3.style.color = '#ecf0f1';
    socials4.style.color = '#ecf0f1';

    darkMode = true;
  } else {
    botao.classList = 'bg-light';
    header.classList = 'bg-light';
    conteudo.classList = 'bg-light';
    link_nav1.classList = 'bg-light';
    link_nav2.classList = 'bg-light';
    link_nav3.classList = 'bg-light';
    socials1.style.color = '#024a56';
    socials2.style.color = '#024a56';
    socials3.style.color = '#024a56';
    socials4.style.color = '#024a56';

    darkMode = false;
  }
});

