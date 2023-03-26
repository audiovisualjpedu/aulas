$(document).ready(function() {
    // Captura o evento de clique no card
    $('.card-clickable').click(function() {
      // Captura as informações do card clicado
      var video = $(this).data('video');
      var title = $(this).data('title');
      var sequencia = $(this).data('sequencia');
      var exercicios = $(this).data('exercicios');

      
      // Atualiza o conteúdo do modal com as informações do card
      $('#myModal .modal-title').html(title);
      $('#myModal iframe').attr('src', video);
      $('#myModal .modal-footer').html('<a href="' + sequencia + '" class="btn btn-primary" target="_blank">Sequência Didática</a> <a href="' + exercicios + '" class="btn btn-primary" target="_blank">Lista de Exercícios</a>');
    });
  });

 