using System;
using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Create an array to hold integer values 0 through 9
            int[] numArray;
            numArray = new int[] {1,2,3,4,5,6,7,8,9};
           
           // Create an array of the names "Tim", "Martin", "Nikki", & "Sara"
           string[] daNames = new string[4] {"Tim", "Martin", "Nikki", "Sara"};
           
           // Create an array of length 10 that alternates between true and false values, starting with true
           bool[] altArray = new bool[10];
           for (int i = 0; i < 10; i += 2) {
               altArray[i] = true;
           }

          
        // make a list of ice cream flavors
        
        List<string> flavors = new List<string>();
        flavors.Add("Mint Choco Chip");
        flavors.Add("Vanilla");
        flavors.Add("Peanut Butter");
        flavors.Add("Caramel");
        flavors.Add("Cake");
        flavors.Add("Snickers");
        Console.WriteLine(flavors.Count);

        // 3rd flavor on list
        Console.WriteLine("dat good good is: " + flavors[2]);
        flavors.RemoveAt(2);
        Console.WriteLine(flavors.Count);

        // make a user dictionary with names and values
        Dictionary<string,string> firstDict = new Dictionary<string,string>();
        Random rand = new Random();
        foreach(string name in daNames)
        {
            firstDict[name] = flavors[rand.Next(flavors.Count)];
        }
        
        Console.WriteLine("incoming homies and flavor prefs:");
        foreach(KeyValuePair<string,string> info in firstDict)
        {
            Console.WriteLine(info.Key + " - " + info.Value);
        }

        }
    }
}