$(document).ready(function(e) {

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


  $('form#cards_in_hands').submit(function() {
    var hand = new Array;
    var hand_test = new Array;
    hand = hand.concat(hand);
    for(i=0;i<10;i++){
      var input_id = 'input'+i.toString();
      if (document.getElementById(input_id).value != ""){
        console.log(i + " is good");
        hand = hand.concat(JSON.search(cards, '//*[contains(name, "' + document.getElementById(input_id).value + '")]'));
        console.log(hand);

      }
    }
    console.log(hand[0].name);
    // console.log(hand);
    // var card_to_search = hand[0]
    // console.log(hand[0][0].name);
    // console.log(hand[1][0].name);

    // Assume void form costs 0 for now
    calculate_damage(hand, 0);



     msg.msg = hand[0].name;
  });

})


// Calculate damage
function calculate_damage(hand, void_form_cost){
  console.log(hand);
  // Assume 10 mana for now
  var total_mana = 10;
  var remaining_mana = total_mana;
  var void_form_cost = void_form_cost;
  var void_form_damage = 2;
  var damage_counter = 0;
  var remaining_hand = hand;
  var play_order = new Array;
  var Velen_played = false;
  var spell_damage = 0;
  var spell_reduction = 0;
  var cards_played = 0;
  var card_played;

  remaining_hand.sort(function(a, b) {
    return parseFloat(a.cost) - parseFloat(b.cost);
  });
  console.log(remaining_hand);


/////////////////////////////
// always paly voild form first
// assume you have nothing on board, only calcuate burst from hand
play_order.push("void form");
damage_counter +=void_form_damage;


// Greedy by what values? Costs (play as many cards as possible)? Or "spell damage" minions -> burn spells ?
// Might need to run the loop multiple times and compare the total damage
  while(remaining_mana > 0 && remaining_hand.length > 0 ){
    console.log("remaining mana: ", remaining_mana);
    console.log("remaing hand size: ", remaining_hand.length);

///////////////////////////////////////////////////////////////////

  for(i=0; i< remaining_hand.length; i++){
    if(remaining_hand[i].cost > remaining_mana){
      remaining_hand.splice(i, 1);
      i--;
    }
  }


// How to choose which card to play???
// Always play Velen first?
if(Velen_played == false){
    for(i=0; i< hand.length; i++){
      if(remaining_hand[i].name = "Prophet Velen"){
        //Pick Velen first if you have mana
        remaining_mana-=remaining_hand[i].cost;
        Velen_played = true;
        card_played = i;
        break;
      }
    }
  }
  else{
    remaining_mana-=remaining_hand[0].cost;
    card_played = 0;
  }


  play_order.push(remaining_hand[i].name);
  console.log("card_played: ", remaining_hand[i].name);
  remaining_hand.splice(card_played, 1);



///////////////////////////////////////////////////////////////////
    play_order.push("void form");
    damage_counter +=void_form_damage;
    if(Velen_played == true){
      damage_counter += 2*void_form_damage;
    }else{
      damage_counter +=void_form_damage;
    }

  }

}
