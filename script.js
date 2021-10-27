$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#nav-menu').fadeToggle();
    event.preventDefault();
  });
});