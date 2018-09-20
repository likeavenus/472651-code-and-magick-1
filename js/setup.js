'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WARLOCK_OBJS = 4;
function getRandomAttribute(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

var renderName = function (index) {
  var WARLOCKS_NAMES = [];
  for (var i = 0; i < names.length; i++) {
    WARLOCKS_NAMES.push(names[getRandomAttribute(0, names.length - 1)] + ' ' + surnames[getRandomAttribute(0, surnames.length - 1)]);
  }
  return WARLOCKS_NAMES[index];
};

var warlocks = [];
var renderObjects = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    warlocks.push(
        {
          name: renderName(i),
          coatColor: coatColors[getRandomAttribute(0, coatColors.length - 1)],
          eyesColor: eyesColors[getRandomAttribute(0, eyesColors.length - 1)]
        }
    );
  }
  return warlocks;
};
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

var fragment = document.createDocumentFragment();
for (var i = 0; i < WARLOCK_OBJS; i++) {
  renderObjects(WARLOCK_OBJS);
  fragment.appendChild(renderWarlock(warlocks[i]));
}
similarList.appendChild(fragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');
var ENTER_KEYCODE = 27;
var ESC_KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
	  closePopup();
  }
});

userName.onfocus = function () {
  setupClose.removeEventListener('keydown', onPopupEscPress);

};

var warlocksCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var warlocksEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireBallWrap = document.querySelector('.setup-fireball-wrap');

var getRandomColor = function (arr) {
 var rand = Math.floor(Math.random() * arr.length);
 return arr[rand];
}

var getColor = function (coat, eyes, fireball) {
 coat.style.fill = getRandomColor(warlocksCoatColors);
 eyes.style.fill = getRandomColor(warlocksEyesColors);
 fireball.style.backgroundColor = getRandomColor(fireBallColors);
}

setupWizard.addEventListener('click', function (evt) {
 getColor(wizardCoat, wizardEyes, fireBallWrap);
})
