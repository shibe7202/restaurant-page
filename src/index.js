import { loadPage } from './page-load';
import { menu } from './menu';
import { about } from './about';
import './style.css';

const content = document.querySelector("#content");
const tabHome = document.querySelector("#home");
tabHome.addEventListener('click', (event) => {
    content.innerHTML = "";
    loadPage();
})

const tabMenu = document.querySelector("#menu");
tabMenu.addEventListener('click', () => {
    content.innerHTML = "";
    menu();
})

const tabAbout = document.querySelector("#about");
tabAbout.addEventListener('click', () => {
    content.innerHTML = "";
    about();
})

loadPage();