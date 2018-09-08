'use strict';
document.querySelector('.setup').classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var WARLOCK_NAME = [
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
};

var warlocks = [
  {
    name: WARLOCK_NAME[0],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[1],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[2],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[3],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[4],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[5],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[6],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  },
  {
    name: WARLOCK_NAME[7],
    coatColor: coatColor[getRandomAttribute(0, 5)],
    eyesColor: eyesColor[getRandomAttribute(0, 4)]
  }
];

console.log(warlocks);

document.querySelector('.setup-similar').classList.remove('hidden');
