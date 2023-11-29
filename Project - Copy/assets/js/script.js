var bar = document.getElementById('bar');
var nav = document.getElementById('nav');

bar.onclick = function () {
    nav.classList.toggle('show-menu');
};

var infor_hide = document.getElementById('infor-hide');
var menu_nav = document.getElementById('menu-nav');

infor_hide.onclick = function () {
    menu_nav.classList.toggle('infor-show');
};