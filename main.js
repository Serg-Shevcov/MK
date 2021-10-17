const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
let player1 = {
  player: 1,
  name: 'Scorpions',
  hp: 100,
  img: 'http:reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['тапор', 'нож'],
  attack: function(name) {
    console.log(name + 'Fight...');
  },
};
let player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['тапор', 'нож'],
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

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function uronHP(){
  let uron = Math.ceil(Math.random() * 100);
if (uron >= 20 || uron == 0)  {
    uronHP();
  } else {
    uron1 = uron;
  }
return uron1;

}
function changeHP(player) {
  const $playerLife = document.querySelector('.player'+ player.player+ ' .life');
  console.log(uronHP());
  player.hp = player.hp - uronHP();
  if (player.hp < 0) {
    player.hp = 0;
  }
  console.log(player.hp);
  $playerLife.style.width = player.hp + '%';

  if (player.hp == 0 && player.player == 1) {
    $arenas.appendChild(playerLose(player2.name));
  } else if (player.hp == 0 && player.player == 2){
    $arenas.appendChild(playerLose(player1.name));
  }
}

function playerLose(name){
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' WIN';

  return $loseTitle;
}
$randomButton.addEventListener('click', function(){
  changeHP(player1);
  changeHP(player2);
})
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
