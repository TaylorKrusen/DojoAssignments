using System;

namespace DojodachiSpace
{
    public class Dojodachi
    {
        public int fullness { get; set; }
        public int happiness { get; set; }
        public int meals { get; set; }
        public int energy { get; set; }
        public string message { get; set; }
        Random rand = new Random();
        public Dojodachi()
        {
            fullness = 20;
            happiness = 20;
            meals = 3;
            energy = 50;
            message = "STOP IGNORING ME!";
        }

        public void feed()
        {
             if (meals > 0) {
                int foodNum = rand.Next(1, 5);
                if (foodNum == 2) {
                    meals -= 1;
                    message = "Your dachi barfed up everything they ate. Gross dude.";
                } 
                else
                {
                    meals -= 1;
                    int food = rand.Next(5,11);
                    fullness += food;
                    message = "Dachi-san is bloated and fat. Gain " + food + " fullness";
                }
            }
        }
        public void work()
        {
            if (energy <= 0)
            {
                message = "Dachi-san is too tired for your nonsense.";
            }
            else
            {
                energy -= 5;
                int bacon = rand.Next(1,4);
                meals += (int)bacon;
                message = "Dachi-san put in work and released a rap album. Brought home " + bacon + " meals.";
            }
        }
        public void sleep()
        {
                energy += 15;
                fullness -= 5;
                happiness -= 5;
                message = "zzzZZZzzz";
        }
        public void play()
        {
            if (energy > 0) {
                int enjoy = rand.Next(1, 5);
                if (enjoy == 2) {
                    energy -= 5;
                    message = "Dachi-san eyed you disdainfully and didn't play. Typical.";
                } 
                else {
                    energy -= 5;
                    int fun = rand.Next(5,11);
                    happiness += fun;
                    message = "Dachi-san enjoyed his own company. Gain " + fun + " happiness";
                }
            }
        }
    }
}