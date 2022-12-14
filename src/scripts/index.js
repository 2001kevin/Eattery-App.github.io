import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import './components/hero';
import './components/footer';
import swRegister from './utils/sw-register';


const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});


// const skipToContent = document.querySelector('.skip-link');
// skipToContent.addEventListener('click', () => {
//   document.querySelector('#maindetail').focus();
// });
