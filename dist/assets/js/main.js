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


// CHANGE THIS !!!! 
jQuery(($) => {

    const sections = $('.section')

    $(window).scroll((event) => {

        let scrollDistance = $(window).scrollTop()

        if($(this).scrollTop() > 10) {
            $('.nav__link, .nav').addClass("fixed")
        } else {
            $('.nav__link, .nav').removeClass("fixed")
        }


    })
})