// Seleciona a lista de vídeos
const listaDeVideos = document.querySelector('.lista-de-videos');

// Seleciona o container dos cards
const containerDeCards = document.querySelector('.container-cards');

// Para cada item da lista, cria um novo card e adiciona ao container
listaDeVideos.querySelectorAll('li').forEach((item) => {
  // Cria um novo card
  const novoCard = document.createElement('div');
  novoCard.classList.add('col-md-4', 'col-sm-4', 'col-lg-3', 'd-flex', 'justify-content-center', 'align-items-center', 'p-3');
  novoCard.innerHTML = `
    <div class="card card-clickable" data-toggle="modal" data-target="#myModal"
         data-video="${item.dataset.video}"
         data-title="${item.dataset.title}"
         data-sequencia="${item.dataset.sequencia}"
         data-exercicios="${item.dataset.exercicios}">
      <img class="card-img-top card-thumbnail" src="./assets/img/6ano/1 Arte.png" alt="Imagem 1">
      <div class="card-body corpo-cartao">
        <a href="${item.dataset.sequencia}" class="card-link">Sequência Didática</a>
        <a href="${item.dataset.exercicios}" class="card-link">Lista de Exercícios</a>
      </div>
    </div>
  `;
  // Adiciona o novo card ao container
  containerDeCards.appendChild(novoCard);
});
