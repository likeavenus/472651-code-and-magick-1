'use strict';
document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var WARLOCKS_NAMES = [
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)],
  names[getRandomAttribute(0, 7)] + ' ' + surname[getRandomAttribute(0, 7)]
];

function getRandomAttribute(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var warlocks = [
  {
    name: WARLOCKS_NAMES[0],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[1],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[2],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[3],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[4],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[5],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[6],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCKS_NAMES[7],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  }
];

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWarlock = function (warlock) {
  for (var i = 0; i < 4; i++) {
    var warlockElement = similarWizardTemplate.cloneNode(true);
    warlockElement.querySelector('.setup-similar-label').textContent = warlock[i].name;
    warlockElement.querySelector('.wizard-coat').style.fill = warlock[i].coatColor;
    warlockElement.querySelector('.wizard-eyes').style.fill = warlock[i].eyesColor;
    similarList.appendChild(warlockElement);
  }
};
renderWarlock(warlocks);

document.querySelector('.setup-similar').classList.remove('hidden');
