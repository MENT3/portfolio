let observer = null
const sectionsSpies = document.querySelectorAll('[data-spy]')

const activate = elem => {
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)

    if(anchor == null) return null

    anchor.parentElement.parentElement
        .querySelectorAll('.active')
        .forEach(node => node.classList.remove('active'))

    anchor.classList.add('active')
}

const callback = (entries, observer) => {
    entries.forEach(entry => { if (entry.intersectionRatio > 0 ) activate(entry.target) })
}

const observe = elems => {
    if(observer !== null) elems.forEach(elem => observer.unobserve(elem))

    const y = Math.round(window.innerHeight * .6)
    observer = new IntersectionObserver(callback, {
        rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })

    sectionsSpies.forEach(elem => observer.observe(elem))
}

if (sectionsSpies.length > 0) {
    observe(sectionsSpies)
    let windowH = window.innerHeight
    window.addEventListener('resize', () => {
        if(window.innerHeight !== windowH) {
            observe(sectionsSpies)
            windowH = window.innerHeight
        }
    })
}


// Animated text
new TypeIt("#animatedText", { 
    speed: 70,
    deleteSpeed: 100,
    waitUntilVisible: true,
    loop: true
})
    .type("Je suid un", {delay: 300})
    .pause(500)
    .move(-3)
    .delete(1)
    .type('s')
    .move('END')
    .type(' develop')
    .delete(-7)
    .pause(200)
    .type('<strong>Développeur</strong>')
    .pause(2000)
    .go();

jQuery(($) => {
    const topBtn = $('#topBtn')
    const linkScroll = $('.nav__link')
    const downArrow = $('.arrow-scroll-down')
    const contactButton = $("a[href$='#contact']")

    // Nav links scroll
    linkScroll.on('click', function(e) {
        e.preventDefault()
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - ($(window).width() <= 756 ? 50 : 100)
        }, 300)
    })

    // Hero down arrow scroll
    downArrow.on('click', function(e) {
        $('body, html').animate({
            scrollTop: $('#about').offset().top - ($(window).width() <= 756 ? 50 : 100)
        }, 300)
    })

    // Fix nav bar on scroll
    $(window).scroll((event) => {
        if($(this).scrollTop() > 10) $('.nav__link, .nav').addClass("fixed")
        else $('.nav__link, .nav').removeClass("fixed")
    })

    // Show top button on scroll
    $(window).scroll(function() {
        if($(window).scrollTop() > 300 && $(window.innerWidth)[0] > 800) topBtn.addClass('show')
        else topBtn.removeClass('show') 
    })

    // Contact bouton
    contactButton.on('click', function(e) {
        $('body, html').animate({
            scrollTop: $('#contact').offset().top - ($(window).width() <= 756 ? 50 : 100)
        }, 300);
    })

    // Go to top 
    topBtn.on('click', function(e) {
      e.preventDefault()
      $('html, body').animate({scrollTop:0}, '300')
    })
})