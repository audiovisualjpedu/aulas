function generateCards(cards) {
  let cardsHtml = "";
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsHtml += `
      <div class="col-md-4 col-sm-4 col-lg-3 d-flex justify-content-center align-items-center p-3">
        <div class="card card-clickable" data-toggle="modal" data-target="#myModal"
          data-video="${card.video}"
          data-title="${card.title}"
          data-sequencia="${card.sequencia}"
          data-exercicios="${card.exercicios}">
          <img class="card-img-top card-thumbnail" src="${card.thumbnail}" alt="Imagem ${i + 1}">
          <div class="card-body corpo-cartao">
            <a href="#" class="card-link d-none">${card.sequencia}</a>
            <a href="#" class="card-link d-none">${card.exercicios}</a>
          </div>
        </div>
      </div>
    `;
  }
  return cardsHtml;
}

  