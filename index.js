const openNav = document.getElementById('nav-bar-open')
const closeNav = document.getElementById('nav-bar-close')
const NavMenu = document.getElementById('nav-menu')
const container = document.getElementById('blur')
let slideIndex = 1
let viewportWidth = document.documentElement.clientWidth;

openNav.addEventListener('click', () => {
    NavMenu.className = 'ul-bar-one';
    NavMenu.style.display = 'block';
    closeNav.style.display = 'block'
    openNav.style.display = 'none'
    document.body.style.position = 'fixed'
    container.classList.toggle('active1')
})

closeNav.addEventListener('click', () => {
    NavMenu.classList.replace('ul-bar-one' ,'ul-bar-two')
    setTimeout(() => {
        NavMenu.style.display = 'none';
        closeNav.style.display = 'none'
        openNav.style.display = 'block'
        container.classList.remove('active1')
    }, 1000)
    document.body.style.position = 'initial'
})

function currentSlide(n) {
    showSlides(slideIndex = n)
}

if (viewportWidth < 600) {
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('dot');

        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = 
            dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
    }
    showSlides(slideIndex);
}

