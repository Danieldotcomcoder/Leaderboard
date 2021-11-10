import { addscores, Displayscore } from './post.js';

document.querySelector('#add-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#name').value;
  const userscore = document.querySelector('#score').value;
  if (username === '' || userscore === '') {
    document.querySelector('.msg').innerHTML = 'Both Fields Should Be Filled';
  } else {
    addscores(username, userscore);
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
});

document.querySelector('.refresh-button').addEventListener('click', () => {
  Displayscore();
  window.location.reload();
});