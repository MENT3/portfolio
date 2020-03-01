jQuery(($) => {

    $(window).scroll((event) => {

        let scrollDistance = $(window).scrollTop()

        $('.section').each((i) => {
            if ($('.section').eq(i).position().top <= scrollDistance) {
                $('.nav a.active').removeClass('active');
                $('.nav .nav__link').eq(i).addClass('active');
            }
        })

        if($(this).scrollTop() > 10) {
            $('.nav__link, .nav').addClass("fixed")
        } else {
            $('.nav__link, .nav').removeClass("fixed")
        }
    })

})