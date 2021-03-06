$(document).ready(function(){

  var color = 'white';
  var colors = 'red green blue yellow white';

  $('#red').on('click', function() {
    color = 'red';
  });

  $('#blue').on('click', function() {
    color = 'blue';
  });

  $('#green').on('click', function() {
    color = 'green';
  });

  $('#yellow').on('click', function() {
    color = 'yellow';
  });

  $('#white').on('click', function() {
    color = 'white';
  });

  $('.box').hover(function(){
    $(this).removeClass(colors);
    $(this).addClass(color);
  });

  $('.box').on('dblclick', function(){
    $(this).removeClass(color);
  });

  $('#reset').on('click', function() {
    $('.box').removeClass(colors);
  });

});
