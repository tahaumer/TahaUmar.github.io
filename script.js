let click = document.getElementById("click");
let content = document.getElementById("content");
let contentclose = document.getElementById("content-close");
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');


window.onscroll = () => {
    content.classList.remove('active');
}

click.addEventListener('click', () => {
    content.classList.add('active')
});

contentclose.addEventListener('click', () => {
    content.classList.remove('active')
});
function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
  }


