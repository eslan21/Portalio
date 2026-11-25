import './style.css';
import { Navbar, initNavbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact, initContact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

function renderApp() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${Navbar()}
    <main>
      ${Hero()}
      ${About()}
      ${Skills()}
      ${Projects()}
      ${Contact()}
    </main>
    ${Footer()}
  `;

  // Inicializar componentes interactivos
  initNavbar();
  initContact();
}

renderApp();
