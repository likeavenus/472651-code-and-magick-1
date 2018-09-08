'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var NAME_Y = 260;

var GAP = 10;

var MARGIN = 50;
var WIDTH_COL = 40;
var HEIGHT_COL = 150;

var FONT_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxTime = function (arr) {
  var maxElem = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
  }
  return maxElem;
};
var getRandomOpacity = function () {
  var colorOpacity = Math.random();
  return colorOpacity;
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, '#rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

  var maxTime = getMaxTime(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + FONT_GAP + (MARGIN + WIDTH_COL) * i, CLOUD_HEIGHT - (HEIGHT_COL * times[i]) / maxTime - GAP * 4);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (MARGIN + WIDTH_COL) * i, NAME_Y);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomOpacity() + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (MARGIN + WIDTH_COL) * i, CLOUD_HEIGHT - (HEIGHT_COL * times[i]) / maxTime - GAP * 3, WIDTH_COL, (HEIGHT_COL * times[i]) / maxTime);
  }
};
