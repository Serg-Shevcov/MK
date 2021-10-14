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

function createPlayer1() {
  $player = document.createElement('div');
  $player.classList.add('player1');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '50%';

  $name = document.createElement('div');
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

createPlayer1('player1', 'Scorpions', 50);

function createPlayer2() {
  $player = document.createElement('div');
  $player.classList.add('player2');

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '80%';

  $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = 'Kitana';

  const $img = document.createElement('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif';

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  const $arenas = document.querySelector('.root');
  $arenas.appendChild($player);
}
createPlayer2('player2', 'Kitana', 80);
