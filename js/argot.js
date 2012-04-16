jQuery(document).ready(function ($) {
  $('.navbar-fixed-top').hover(
    function () {
    var $navbar = $(this);
    $navbar.stop().animate({ top: 0 });
  },
  function() {
    var $navbar = $(this);
    $navbar.stop().animate({ top: '-32px' });
  });
  $('.tabs li a').click(function(e) {
    e.preventDefault();
    var currentTab = $(this).closest('li');
    var tabs = $('.tabs');
    tabs.find('.active')
      .stop()
      .animate({ top: 0 }, 'fast',
              function() {
                $(this).removeClass('active');
                currentTab.animate({ top: '3em' }).addClass('active');
              });
    //currentTab.animate({ top: '3em' }).addClass('active');
  });
  $('ul.nav li').not('.dropdown').find('a').click(function(e) {
    e.preventDefault();
    $('.edit_content').slideToggle();
  });
  $('.action').click(function(e) {
    e.preventDefault();
    $('.edit_content').slideToggle();
  });
  $('textarea.focus').focus();
});
