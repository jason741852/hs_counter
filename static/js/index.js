var cards = [];

var cards_Basic = [];
var cards_Classic = [];
var cards_JTU = [];
var cards_KFC = [];
var cards_MSG = [];
var cards_ONK = [];
var cards_WTG = [];
var card_names = new Array();

$.ajax({
  url: "/static/json/carddata.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    cards = data;
    console.log(cards);
    cards_Basic = cards['Basic'];
    cards_Classic = cards['Classic'];
    cards_JTU = cards['Journey to Un\'Goro'];
    cards_KFC = cards['Knights of the Frozen Throne'];
    cards_MSG = cards['Mean Streets of Gadgetzan'];
    cards_ONK = cards['One Night in Karazhan'];
    cards_WTG = cards['Whispers of the Old Gods'];
  }
});


for(i = 0; i<cards_Basic.length; i++){

  card_names.push(cards_Basic[i].name);
}
for(i = 0; i<cards_Classic.length; i++){
  card_names.push(cards_Classic[i].name);
}
for(i = 0; i<cards_JTU.length; i++){
  card_names.push(cards_JTU[i].name);
}
for(i = 0; i<cards_MSG.length; i++){
  card_names.push(cards_MSG[i].name);
}
for(i = 0; i<cards_ONK.length; i++){
  card_names.push(cards_ONK[i].name);
}
for(i = 0; i<cards_WTG.length; i++){
  card_names.push(cards_WTG[i].name);
}
card_names.sort();


var datalist = document.createElement("datalist");
datalist.setAttribute('id','card-name-list');
for(i=0; i<card_names.length; i++){
  var option = document.createElement('option');
  option.value = card_names[i];
  // Add the <option> element to the <datalist>.
  datalist.appendChild(option);
}

var parent = document.getElementById("card_inputs");
for(j=0; j<10; j++){
  var input = document.createElement("input");
  var input_id = 'input'+j.toString();
  input.setAttribute('type', 'text');
  input.setAttribute('id', input_id);
  input.setAttribute('list', 'card-name-list')
  parent.appendChild(input);
  parent.appendChild(datalist);
}

var msg = {msg: 'Vue.js is rad'};
var output = new Vue({ el: '#test', data: msg});


$(document).ready(function(e) {
  $('form#cards_in_hands').submit(function() {
    var hand = new Array;
    for(i=0;i<10;i++){
      var input_id = 'input'+i.toString();
      if (document.getElementById(input_id).value != ""){
        hand.push(JSON.search(cards, '//*[contains(name, "' + document.getElementById(input_id).value + '")]'));
      }
    }
    console.log(hand);
    var card_to_search = hand[0]
    console.log(hand[0][0].name);
    console.log(hand[1][0].name);

     msg.msg = document.getElementById("input1").value;
  });

})


// Input: card name; Output: card object
$(function search(card_name){

})
