'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandomAttribute(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var WARLOCKS_NAMES = [];

var renderName = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    WARLOCKS_NAMES[i] = names[getRandomAttribute(0, 7)] + ' ' + surnames[getRandomAttribute(0, 7)];;
  }
};
renderName(5);

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
  }
];

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWarlock = function (warlock) {
    var warlockElement = similarWizardTemplate.cloneNode(true);
    warlockElement.querySelector('.setup-similar-label').textContent = warlock.name;
    warlockElement.querySelector('.wizard-coat').style.fill = warlock.coatColor;
    warlockElement.querySelector('.wizard-eyes').style.fill = warlock.eyesColor;
    return warlockElement;
};
renderWarlock(warlocks);
var fragment = document.createDocumentFragment();
for (var i = 0; i < warlocks.length; i ++) {
  fragment.appendChild(renderWarlock(warlocks[i]));
}
similarList.appendChild(fragment);


document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
