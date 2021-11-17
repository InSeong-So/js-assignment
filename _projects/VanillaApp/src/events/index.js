import utils from '../utils/index.js';

export const login = {
  // login
  toggleForm: ({ target }) => {
    console.log(target);
    if (target.textContent === '돌아가기') {
      location.href = '#/';
    }
    utils.$$('form').forEach(form => {
      form.classList.toggle('hidden');
    });
    utils.$$('input').forEach(item => (item.value = ''));
  },

  submitAction: event => {
    const { target } = event.target.dataset;

    const id = utils.$(`.${target}-id`).value;
    const password = utils.$(`.${target}-password`).value;
    const passwordCheck = utils.$(`.${target}-password-check`)?.value;

    console.log(id, password, passwordCheck);
  },
};

export const globalEvents = {
  init: () => {
    window.addEventListener('scroll', () => {
      var windowTop = document.documentElement.scrollTop;
      windowTop > 100
        ? document.querySelector('nav').classList.add('navShadow')
        : document.querySelector('nav').classList.remove('navShadow');
      windowTop > 100
        ? (document.querySelector('ul').style.top = '90px')
        : (document.querySelector('ul').style.top = '120px');
    });
  },
};