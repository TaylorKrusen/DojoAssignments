function Card (suit, rank){
    this.suit = suit;
    this.rank = rank;
}

// this converts our numbers into the corresponding card suit and rank
Card.prototype.print = function() {
    var suits = ['Hearts','Diamonds','Clubs','Spades'];
    var ranks = {
        1: "Ace",
        11: "Jack",
        12: "Queen",
        13: "King"
    }

    if (this.rank >= 2 && this.rank <= 10){
            return `${this.rank} of ${suits[this.suit]}`
        } else {
            return `${ranks[this.rank]} of ${suits[this.suit]}`
        }
}

function Deck(){
    var deck = []

    for(var suit=0;suit<4;suit++){
        for (var rank=1; rank <=13; rank++) {
            deck.push(new Card(suit,rank))
        }
    }
    this.shuffle = function(){
        for (var card = 0; card < deck.length; card++){
            var other = Math.floor(Math.random() * deck.length)
            var temp = deck[card]
            deck[card] = deck[other]
            deck[other] =  temp
        }
    }

    this.deal = function(){
        return deck.pop()
    }
}

function Player (name) {
    this.name = name
    this.active_deck = []
    this.trash_deck = []
}

Player.prototype.draw = (){
    // this is a private variable and needs a special method to call on it's value
    var drawn_card = this.active_deck[active_deck.length - 1]
}
var jace = new Player('Jace')
var evee = new Player('Evee the Dog')


var my_deck = new Deck()

my_deck.shuffle()

// this is our initial shuffle to split the cards between two players.
for (var card=1;card<=52;card++){
    if (card % 2 == 0) {
        jace.active_deck.push(my_deck.deal())
    } else {
        evee.active_deck.push(my_deck.deal())
    }
}
// console.log(jace.active_deck.length)
// console.log(evee.active_deck.length)
