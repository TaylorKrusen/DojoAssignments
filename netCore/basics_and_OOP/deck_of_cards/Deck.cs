
using System;
using System.Collections.Generic;
namespace BlackJack {
    public class Deck {
        // Give the Deck class a property called "cards" which is a list of Card objects 
        // When initializing the deck make sure that it has a list of 52 unique cards as its "cards" property
        // Give the Deck a deal method that selects the "top-most" card, removes it from the list of cards, and returns the Card 
        // Give the Deck a reset method that resets the cards property to the contain the original 52 cards 
        // Give the Deck a shuffle method that randomly reorders the deck's cards

        public  List<Card> cards = new List<Card>();
        public Deck() {
            // Ace - 10, Jack, Queen, King
            for(int i = 1; i <= 13; i++) {
                // Clubs, Spades, Hearts, Diamonds
                for (int j = 1; j <= 4; j++) {
                    if (j == 1) {
                        Card card = new Card("Clubs",i);
                        cards.Add(card);
                    } else if (j == 2) {
                        Card card = new Card("Spades", i);
                        cards.Add(card);
                    } else if (j == 3) {
                        Card card = new Card("Hearts", i);
                        cards.Add(card);
                    } else {
                        Card card = new Card("Diamonds", i);
                        cards.Add(card);
                    }
                }
            }
        }
        public Card deal(){
            Card topCard = this.cards[this.cards.Count - 1];
            this.cards.Remove(this.cards[this.cards.Count - 1]);
            return topCard;
        }
        public void reset() {
            Deck new_deck = new Deck();
            this.cards = new_deck.cards;
        }
        public void shuffle() {
            Random rand = new Random();
            for (int i = this.cards.Count-1; i > 0; i--) {
                int rand_idx = rand.Next(0,i);
                Card temp = this.cards[rand_idx];
                this.cards[rand_idx] = this.cards[i];
                this.cards[i] = temp;
            }
        }
    }
}    