var game = {
  players: [],
  addPlayer: function(){}
};
function playerConstructor(name){
  this.name = name;
  this.hand = [];
  this.addCard = function(card){
    this.hand.push(card);
  };
};
