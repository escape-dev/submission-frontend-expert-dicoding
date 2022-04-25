import '../styles/main.css';
import 'regenerator-runtime';
import '../styles/responsive.css';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#buttonMenu'),
  drawer: document.querySelector('#drawer'),
  header: document.querySelector('header'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

export default app;
