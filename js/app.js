 // Menu for small phones
        $('header svg').on('click', function(){
            $(this).toggleClass('transformSVG');
                    
            $('header .main-nav').toggle();
        });

        $(document).ready(function(){
            $('.work').slick({
                dots: true,
                infinite: true, 
                speed: 300,
                slidesToShow: 1,
                responsive: [
                        {
                        breakpoint: 768,
                        settings: "unslick"
                        }]
                
            });
            });