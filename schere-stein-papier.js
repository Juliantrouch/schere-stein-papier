const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
let score = findPlayer('Spieler');

updateScoreElement();
renderLeaderboard();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function findPlayer(name) {
  for (let i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i].name === name) {
      return leaderboard[i];
    }
  }
  const newPlayer = { name: name, wins: 0, losses: 0, ties: 0 };
  leaderboard.push(newPlayer);
  return newPlayer;
}

function getPoints(player) {
  return player.wins * 3 + player.ties * 1;
}

function saveLeaderboard() {
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function changeName() {
  const name = document.querySelector('.js-name-input').value;
  if (name === '') {
    return;
  }
  score = findPlayer(name);
  saveLeaderboard();
  updateScoreElement();
  renderLeaderboard();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  saveLeaderboard();
  updateScoreElement();
  renderLeaderboard();
}

function renderLeaderboard() {
  leaderboard.sort(function(a, b) {
    return getPoints(b) - getPoints(a);
  });

  let html = '';
  for (let i = 0; i < leaderboard.length; i++) {
    const player = leaderboard[i];
    html += `<p>${i + 1}. ${player.name}: ${getPoints(player)} Punkte</p>`;
  }
  document.querySelector('.js-leaderboard').innerHTML = html;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  saveLeaderboard();
  renderLeaderboard();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer`;
  updateScoreElement();
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}, Punkte: ${getPoints(score)}`;
}
