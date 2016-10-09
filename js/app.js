// Menu for small phones
$('header svg').on('click', function(){
    $(this).toggleClass('transformSVG');
             
    $('header .main-nav').toggle();
});