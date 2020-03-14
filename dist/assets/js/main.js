jQuery(($) => {

    const sections = $('.section')
    const linkScroll = $('.nav__link')
    const downArrow = $('.arrow-scroll-down')

    $(window).scroll((event) => {

        let scrollDistance = $(window).scrollTop()

        sections.each((i) => {

            if (sections.eq(i).position().top <= scrollDistance+150) {
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

    linkScroll.on('click', function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 300);
    });

    downArrow.on('click', function(e) {
        $('body, html').animate({
            scrollTop: $('#about').offset().top - 100
        }, 300);
    })

})