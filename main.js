let player1 = {
  name: 'Scorpions',
  hp: 100,
  img: 'http:reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['тапор', 'нож'],
  attack: function() {
    console.log(player1.name + 'Fight...');
  },
};
let player2 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['тапор', 'нож'],
  attack: function() {
    console.log(player2.name + 'Fight...');
  },
};

function createPlayer() {
  const $player = document.createElement('div');
  $player.classList.add('player');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = 'Scorpions';

  const $img = document.createElement('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  const $arenas = document.querySelector('.root');
  $arenas.appendChild($player);
}

createPlayer('player1', 'Scorpions', 50);
createPlayer('player2', 'Kitana', 80);
