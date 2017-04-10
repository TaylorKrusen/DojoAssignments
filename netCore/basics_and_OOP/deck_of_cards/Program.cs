using System;
// using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // Card jace = new Card("Clubs",13);
            // Console.WriteLine(jace.ToString());
            Deck tyler = new Deck();
            // for (var i = 0; i < tyler.cards.Count; i++) {
            //     Console.WriteLine(tyler.cards[i].ToString());
            // }
            // Console.WriteLine("King of Diamonds: " + tyler.deal().ToString());
            // Console.WriteLine("King of Hearts: " + tyler.deal().ToString());
            // Console.WriteLine("King of Spades: " + tyler.deal().ToString());
            tyler.shuffle();
            for (var i = 0; i < tyler.cards.Count; i++) {
                Console.WriteLine(tyler.cards[i].ToString());
            }
            tyler.reset(); 
            for (var i = 0; i < tyler.cards.Count; i++) {
                Console.WriteLine(tyler.cards[i].ToString());
            }
        }
    }
}