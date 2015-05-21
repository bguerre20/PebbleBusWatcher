/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: '   Bus Watcher',
  icon: 'images/bus_icon.png',
  subtitle: '',
  body: ' - Top for Stop 1\n - Bottom for\n   Stop 2'
});

main.show();

main.on('click', 'up', function(e) {
  var card = new UI.Card();
  card.title('La Pasada - ');
  card.subtitle('Apt. Stop');
  card.body('\nFetching...\nPlease Wait.');
  card.show();
});

main.on('click', 'select', function(e) {
  
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Beach Drive - ');
  card.subtitle('Campus Stop');
  card.body('\nFetching...\nPlease Wait.');
  card.show();
});
