namespace BlackJack{    
    public class Card {
        // Give the Card class a property "stringVal" which will hold the value of the card ex. (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King). This "val" should be a String 
        // Give the Card a property "suit" which will hold the suit of the card (Clubs, Spades, Hearts, Diamonds) 
        // Give the Card a property "val" which will hold the numerical value of the card 1-13 as integers

        public string stringVal {
            get {
                if(val > 1 && val < 11) {
                    return val.ToString();
                } else if (val == 11) {
                    return "Jack";
                } else if (val == 12) {
                    return "Queen";
                } else if (val == 13) {
                    return "King";
                } else if (val ==1) {
                    return "Ace";
                } else {
                    return "Your fake news";
                }
            }
        }
        public string suit;
        public int val;

        public Card(string cardSuit, int cardVal){
            suit = cardSuit;
            val = cardVal;
        }
        public override string ToString(){
            return stringVal + " of " + suit;
        }
    }
}