<<<<<<< Updated upstream
let player1 = {
=======
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
let player1 = {
  player: 1,
>>>>>>> Stashed changes
  name: 'Scorpions',
  hp: 100,
  img: 'http:reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['тапор', 'нож'],
<<<<<<< Updated upstream
  attack: function() {
    console.log(player1.name + 'Fight...');
  },
};
let player2 = {
=======
  attack: function(name) {
    console.log(name + 'Fight...');
  },
};
let player2 = {
  player: 2,
>>>>>>> Stashed changes
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['тапор', 'нож'],
<<<<<<< Updated upstream
  attack: function() {
    console.log(player2.name + 'Fight...');
  },
};

function createPlayer(player, name, life) {
  $player = document.createElement('div');
  $player.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = '100%';

  $name = document.createElement('div');
  $name.classList.add(name);
  $name.innerText = name;

  const $img = document.createElement('img');
  $img.src = 'player.img';
=======
  attack: function(name) {
    console.log(name + 'Fight...');
  },
};

function createElement(tag, className){
  const $tag = document.createElement(tag);
  if (className) {
     $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {

  const $player = createElement('div', 'player'+playerObj.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $life.style.width = playerObj.hp +'%';
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;
>>>>>>> Stashed changes

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

<<<<<<< Updated upstream
  const $arenas = document.querySelector('.root');
  $arenas.appendChild($player);
}

createPlayer('player1', 'Scorpions', 50);
createPlayer('player2', 'Kitana', 80);
=======
  return $player;
}

function uronHP(){
  let uron = Math.ceil(Math.random() * 100);
  if (uron > 20 && uron < 1) {
    uronHP();
  }
  return uron;
}
function changeHP(player) {
  const $playerLife = document.querySelector('.player'+ player.player+ ' .life');
  player.hp = player.hp - uronHP();
  if (player.hp < 0) {
    player.hp = 0;
  }
  console.log(player.hp);
  $playerLife.style.width = player.hp + '%';

  if (player.hp == 0) {
    $arenas.appendChild(playerLose(player.name));
  }
}

function playerLose(name){
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' lose';

  return $loseTitle;
}
$randomButton.addEventListener('click', function(){
  changeHP(player1);
  changeHP(player2);
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
>>>>>>> Stashed changes
