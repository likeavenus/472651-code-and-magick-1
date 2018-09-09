'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var WARLOCKS_NAMES = [];

var renderName = function(quantity) {
  for (var i = 0; i < quantity; i++) {
    WARLOCKS_NAMES.push(names[getRandomAttribute(0, 7)] + ' ' + surnames[getRandomAttribute(0, 7)]);
  }
}
renderName(9);

function getRandomAttribute(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var warlocks = [
  {
    name: WARLOCKS_NAMES[0],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[1],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[2],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[3],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[4],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[5],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[6],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[7],
    coatColor: coatColors[getRandomAttribute(0, 5)],
    eyesColor: eyesColors[getRandomAttribute(0, 4)]
  }
];

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWarlock = function (warlock, quantity) {
  for (var i = 0; i < quantity; i++) {
    var warlockElement = similarWizardTemplate.cloneNode(true);
    warlockElement.querySelector('.setup-similar-label').textContent = warlock[i].name;
    warlockElement.querySelector('.wizard-coat').style.fill = warlock[i].coatColor;
    warlockElement.querySelector('.wizard-eyes').style.fill = warlock[i].eyesColor;
    similarList.appendChild(warlockElement);
  }
};
renderWarlock(warlocks, 4);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
