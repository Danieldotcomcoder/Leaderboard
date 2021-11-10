const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BQIIMRTZbQu0evVyYzYL/scores';
const ScoreList = document.querySelector('.score-list');

const Displayscore = async () => {
  const response = await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => data.result);
  response.forEach((item) => {
    const newitem = document.createElement('li');
    newitem.innerHTML = `<h4>${item.user}&nbsp&nbsp&nbsp${item.score}</h4>`;
    ScoreList.appendChild(newitem);
  });

  return response;
};

const addscores = async (name, score) => {
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export { addscores, Displayscore };