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
    if(j%5 == 0){
      var row_div = document.createElement("div");
      row_div.setAttribute('class', 'row top-buffer');
      parent.appendChild(row_div);
    }
    var col_div = document.createElement("div");
    var col_id = 'col'+j.toString();
    col_div.setAttribute('class', 'col-lg-15');
    col_div.setAttribute('id', col_id);
    row_div.appendChild(col_div);

    var img = document.createElement("img");
    var img_id = 'img'+j.toString();
    var img_src = 'imageLink'+j.toString();

    var input = document.createElement("input");
    var input_id = 'input'+j.toString();
    input.setAttribute('type', 'text');
    input.setAttribute('id', input_id);
    input.setAttribute('v-model', "cardSelector");
    input.setAttribute('list', 'card-name-list')
    col_div.appendChild(input);
    col_div.appendChild(datalist);

    img.setAttribute('id', img_id);
    img.setAttribute('class', "img-fluid");
    img.setAttribute(':src', img_src);
    //img.setAttribute('src', "/static/images/card-back-default.png");
    col_div.appendChild(img);

  }



  var bindImage0 = new Vue({
    el: '#col0',
    data: {
      imageLink0: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input0").value);
          if (document.getElementById("input0").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input0").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink0 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage1 = new Vue({
    el: '#col1',
    data: {
      imageLink1: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input1").value);
          if (document.getElementById("input1").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input1").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink1 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage2 = new Vue({
    el: '#col2',
    data: {
      imageLink2: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input2").value);
          if (document.getElementById("input2").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input2").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink2 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage3 = new Vue({
    el: '#col3',
    data: {
      imageLink3: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input3").value);
          if (document.getElementById("input3").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input3").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink3 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage4 = new Vue({
    el: '#col4',
    data: {
      imageLink4: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input4").value);
          if (document.getElementById("input4").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input4").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink4 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage5 = new Vue({
    el: '#col5',
    data: {
      imageLink5: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input5").value);
          if (document.getElementById("input5").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input5").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink5 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage6 = new Vue({
    el: '#col6',
    data: {
      imageLink6: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input6").value);
          if (document.getElementById("input6").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input6").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink6 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage7 = new Vue({
    el: '#col7',
    data: {
      imageLink7: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input7").value);
          if (document.getElementById("input7").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input7").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink7 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage8 = new Vue({
    el: '#col8',
    data: {
      imageLink8: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input8").value);
          if (document.getElementById("input8").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input8").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink8 = newImagePath;
        },
        100
      )
    }
  });

  var bindImage9 = new Vue({
    el: '#col9',
    data: {
      imageLink9: "/static/images/card-back-default.png",
      cardSelector: ""
    },
    watch: {
      cardSelector: function(newCardImage){
        console.log("function triggered");
        this.getImage()
      }
    },
    methods:{
      getImage: _.debounce(
        function(){
          console.log("function triggered");
          console.log(document.getElementById("input9").value);
          if (document.getElementById("input9").value != ""){
            //console.log(i + " is good");
            var newImage = JSON.search(cards, '//*[contains(name, "' + document.getElementById("input9").value + '")]');
            //console.log(newImage[0].cardId);
            var newImagePath = "/static/images/card_images/" + newImage[0].cardId + ".png";
            console.log(newImagePath);

          }

          this.imageLink9 = newImagePath;
        },
        100
      )
    }
  });


  var msg = {msg: 'Vue.js is rad'};
  var output = new Vue({ el: '#test', data: msg});


    $('form#cards_in_hands').submit(function() {
      var hand = new Array;
      var hand_test = new Array;
      hand = hand.concat(hand);
      for(i=0;i<10;i++){
        var input_id = 'input'+i.toString();
        if (document.getElementById(input_id).value != ""){
          //console.log(i + " is good");
          hand = hand.concat(JSON.search(cards, '//*[contains(name, "' + document.getElementById(input_id).value + '")]'));
          //console.log(hand);

        }
      }
      //console.log(hand[0].name);
      // console.log(hand);
      // var card_to_search = hand[0]
      // console.log(hand[0][0].name);
      // console.log(hand[1][0].name);

      // Assume void form costs 0 for now
      calculate_damage(hand, 0);



       msg.msg = "Calculating damage..";
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
    var has_Velen = false;
    var Velen_played = false;
    var spell_damage_aura = 0;
    var spell_cost_reduction = 0;
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




  for(i=0; i< remaining_hand.length; i++){
    if(remaining_hand[i].name == "Prophet Velen"){
      has_Velen = true;
      console.log("Player has Velen");
    }
    if(remaining_hand[i].cost > remaining_mana){
      remaining_hand.splice(i, 1);
      i--;
    }
  }


  // Greedy by what values? Costs (play as many cards as possible)? Or "spell damage" minions -> burn spells ?
  // Might need to run the loop multiple times and compare the total damage
  while(remaining_mana > 0 && remaining_hand.length > 0 ){
    console.log("-----------");
    console.log("remaining mana: ", remaining_mana);
    console.log("remaing hand size: ", remaining_hand.length);



  // How to choose which card to play???
  // Always play Velen first?
  if(has_Velen == true && Velen_played == false){
      for(i=0; i< hand.length; i++){
        if(remaining_hand[i].name == "Prophet Velen"){
          //Pick Velen first if you have mana
          remaining_mana-=remaining_hand[i].cost;
          Velen_played = true;
          card_played = i;
          break;
        }
      }
    }
  else{
    console.log("remaining_hand: ", remaining_hand);
    remaining_mana-=remaining_hand[0].cost;
    if(remaining_hand[0].type == "Spell" && remaining_hand[0].text.search("damage") != -1){
      var spell_damage_dealt = SpellDamageCalculate(remaining_hand[0], spell_damage_aura);
      console.log(spell_damage_dealt);
      if(Velen_played == true) spell_damage_dealt = 2*spell_damage_dealt;
      damage_counter += spell_damage_dealt;
    }
    card_played = 0;
  }


  play_order.push(remaining_hand[card_played].name);
  console.log("card_played: ", remaining_hand[card_played].name);
  remaining_hand.splice(card_played, 1);



  ///////////////////////////////////////////////////////////////////
  play_order.push("void form");
    if(Velen_played == true){
      console.log("velen multiplier enabled");
      damage_counter += 2*void_form_damage;
    }else{
      damage_counter +=void_form_damage;
    }
    console.log("damage counter: ", damage_counter);

  }

}

function SpellDamageCalculate(spell, spell_damage_aura){
  // If AOE spell then does not do damage to hero
  if(spell.text.search("minions") != -1){
    return 0;
  }
  else{
    var regex = /\d+/g;
    return parseInt(spell.text.match(regex))+spell_damage_aura;
  }
}
