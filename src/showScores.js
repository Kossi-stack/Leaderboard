const showScores = (scores) => {
  const scoresContainer = document.getElementById('table');
  scoresContainer.innerHTML = '';
  scores.forEach((score) => {
    const scoreList = `<li class="name-scores">${score.user}: ${score.score}</li>`;

    scoresContainer.innerHTML += scoreList;
  });
};

export default showScores;