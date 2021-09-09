import './style.css';
import postScores from './postScores.js';
import getScores from './getScores.js';
import showScores from './showScores.js';
import showError from './showError.js';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');
const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GDUN7EKtNyCRpmru02cT/scores';

refresh.addEventListener('click', () => {
  getScores(gameApi).then((data) => showScores(data.result));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showError();
  postScores(gameApi);
});

window.onload = getScores(gameApi).then((data) => showScores(data.result));
