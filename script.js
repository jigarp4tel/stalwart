const menubar = document.getElementById('menubar');
const menu = document.getElementById('menu');

menubar.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll-background');
})
