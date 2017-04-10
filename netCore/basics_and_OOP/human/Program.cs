using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Human theTaylor = new Human("Taylor", 4, 5, 5, 200);
            Human theIan = new Human("Owen", 2, 2, 2, 100);
            theTaylor.Attack(theIan);
            Console.WriteLine($"After being attacked by the {theTaylor.name}, the {theIan.name}'s health is now {theIan.health}");
            theIan.Attack(theTaylor);
            Console.WriteLine($"After being attacked by the {theIan.name}, the {theTaylor.name}'s health is now {theTaylor.health}");
            theIan.Attack(theTaylor);

        }
    }
}
