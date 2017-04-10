using System.Collections.Generic;

// public class Player {
//     // Give the Player class a name property 
//     // Give the Player a hand property that is a List of type Card 
//     // Give the Player a draw method of which draws a card from a deck, adds it to the player's hand and returns the Card
//     // Note this method will require reference to a deck object
//     // Give the Player a discard method which discards the Card at the specified index from the player's hand and returns this Card or null if the index does not exist.
// // public string name = 
// public  List<Card> hand = new List<Card>();

//  public Card draw(){
//         Card drawnCard = this.cards[this.cards.Count - 1];
//         this.cards.Remove(this.cards[this.cards.Count - 1]);
//         return topCard;
//     }

// }
namespace BlackJack {
    public class Player {
        public string Name { get; set; }
        public List<Card>  Hand {get; set;}

        public Player(string name){
            Name = name;
            Hand = new List<Card>();
        }

        public Card Draw(Deck deck){
            Card DealtCard = deck.deal();
            Hand.Add(DealtCard);
            return DealtCard;
        }

        public Card Discard(int idx){
            idx--;
            if (idx > Hand.Count) {
                return null;
            }
            Card DiscardedCard = Hand[idx];
            Hand.RemoveAt(idx);
            return DiscardedCard;
        }
    }
}