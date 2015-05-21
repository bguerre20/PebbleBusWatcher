var UI = require('ui');
var gCountdown = {};
var gCountdown2 = {};

var main = new UI.Card({
  title: '   Bus Watcher',
  icon: 'images/bus_icon.png',
  subtitle: '',
  body: ' - Top for Stop 1\n - Bottom for\n   Stop 2'
});

fetchBusTime1();
fetchBusTime2();
main.show();

main.on('click', 'up', function(e) {
  var card = new UI.Card();
  card.title('La Pasada - ');
  card.subtitle('Apt. Stop');
  card.body('\nFetching...\nPlease Wait.');
  card.show();
  
  fetchBusTime1();
  
  card.body(gCountdown);
});

main.on('click', 'select', function(e) {
  //do nothing
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Beach Drive - ');
  card.subtitle('Campus Stop');
  card.body('\nFetching...\nPlease Wait.');
  card.show();
  
  fetchBusTime2();
  
  card.body(gCountdown2);
});


 function fetchBusTime1(){
   
   var isInitMsg = true;
   var response;
   var req = new XMLHttpRequest();
  // build the GET request
    req.open('POST', "http://webwatch.lbtransit.com/tmwebwatch/Arrivals.aspx/getStopTimes", true);
    req.setRequestHeader("Content-Type","application/json");
  req.onload = function(e) {
    if (req.readyState == 4) {
      // 200 - HTTP OK
      if(req.status == 200) {
        console.log(req.responseText);
        response = JSON.parse(req.responseText);
        var predTime, predPeriod, countdown;
        if (response.d) {
          // data found, look for LastPrice
            predTime = response.d.stops[0].crossings[0].predTime;
            predPeriod = response.d.stops[0].crossings[0].predPeriod;
            countdown = response.d.stops[0].crossings[0].countdown;
          console.log(predTime);
          gCountdown.init = true;
          gCountdown.symbol = "121";
          var msg = {};
          if (isInitMsg) {
            msg.init = true;
            //msg.symbol = symbol;
            msg.symbol = "121";
          }
          //msg.price = predTime.toString()+" "+predPeriod.toString();
            msg.price = countdown.toString();
          gCountdown = countdown.toString();
          Pebble.sendAppMessage(msg);
        }
      } else {
        console.log("Request returned error code " + req.status.toString());
      }
    }
  };
  req.send("{routeID: 18,       directionID: 4, stopID: 1104, useArrivalTimes:  true}");
    //CHANGE THIS LINE TO GET OTHER STOPS
 }

function fetchBusTime2(){
   
   var isInitMsg = true;
   var response;
   var req = new XMLHttpRequest();
  // build the GET request
    req.open('POST', "http://webwatch.lbtransit.com/tmwebwatch/Arrivals.aspx/getStopTimes", true);
    req.setRequestHeader("Content-Type","application/json");
  req.onload = function(e) {
    if (req.readyState == 4) {
      // 200 - HTTP OK
      if(req.status == 200) {
        console.log(req.responseText);
        response = JSON.parse(req.responseText);
        var predTime, predPeriod, countdown;
        if (response.d) {
          // data found, look for LastPrice
            predTime = response.d.stops[0].crossings[0].predTime;
            predPeriod = response.d.stops[0].crossings[0].predPeriod;
            countdown = response.d.stops[0].crossings[0].countdown;
          console.log(predTime);
          gCountdown2.init = true;
          gCountdown2.symbol = "121";
          var msg = {};
          if (isInitMsg) {
            msg.init = true;
            //msg.symbol = symbol;
            msg.symbol = "121";
          }
          //msg.price = predTime.toString()+" "+predPeriod.toString();
            msg.price = countdown.toString();
          gCountdown2 = countdown.toString();
          Pebble.sendAppMessage(msg);
        }
      } else {
        console.log("Request returned error code " + req.status.toString());
      }
    }
  };
  req.send("{routeID: 18,       directionID: 2, stopID: 1348, useArrivalTimes:  true}");
    //CHANGE THIS LINE TO GET OTHER STOPS
 }

