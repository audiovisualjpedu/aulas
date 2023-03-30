// Pegando os botões e a div do topo
const btns = document.querySelectorAll('.dropdown-menu button');
const topBtn = document.querySelector('.dropdown-toggle');

// Adicionando evento de clique nos botões
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Pegando o conteúdo e a cor do botão clicado
    const content = btn.innerHTML;
    const color = window.getComputedStyle(btn).getPropertyValue('background-color');
    const width = window.getComputedStyle(btn).getPropertyValue('width');
    const height = window.getComputedStyle(btn).getPropertyValue('height');
    const fontSize = window.getComputedStyle(btn).getPropertyValue('font-size');

    // Atualizando o botão no topo com o conteúdo e a cor do botão clicado
    topBtn.innerHTML = content + '<span class="caret"></span>';
    topBtn.style.backgroundColor = color;
    topBtn.style.width = width;
    topBtn.style.height = height;
    topBtn.style.fontSize = fontSize;
    topBtn.classList.remove('btn-dropdown');
  });
});

// Selecionando o primeiro botão como padrão
const firstBtn = btns[0];
const firstContent = firstBtn.innerHTML;
const firstColor = window.getComputedStyle(firstBtn).getPropertyValue('background-color');
const firstWidth = window.getComputedStyle(firstBtn).getPropertyValue('width');
const firstHeight = window.getComputedStyle(firstBtn).getPropertyValue('height');
const firstFontSize = window.getComputedStyle(firstBtn).getPropertyValue('font-size');

topBtn.innerHTML = firstContent + '<span class="caret"></span>';
topBtn.style.backgroundColor = firstColor;
topBtn.style.width = firstWidth;
topBtn.style.height = firstHeight;
topBtn.style.fontSize = firstFontSize;
topBtn.classList.remove('btn-dropdown');

const btnArte = document.querySelector('.btn_arte');
btnArte.style.width = firstWidth;

// Removendo o espaçamento dos botões dentro do dropdown
const dropdownBtns = document.querySelectorAll('.dropdown-menu button');
dropdownBtns.forEach(btn => {
  btn.style.marginTop = '0';
  btn.style.marginBottom = '0';
});
