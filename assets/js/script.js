$(document).ready(function() {
    // navegação entre as tabs
    $('button[data-toggle="tab"]').on('click', function() {
      var target = $(this).attr('data-target');
      $(target).addClass('in active').siblings().removeClass('in active');
    });
  });
  