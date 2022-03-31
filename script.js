const menu = document.querySelector('#mobile-menu')
const menuLikns = document.querySelector('.navbar__menu')
let circle = document.querySelector('#circle')
let body = document.querySelector('body')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLikns.classList.toggle('active');
})
circle.onclick = function() {
    if (circle) {
        circle.style.left = "-10px"
        circle.style.transition = "1s"
        circle.onclick = function() {
            if (circle) {
                circle.style.left = "15px"
                circle.style.transition = "1s"
            }
        }
    }
}