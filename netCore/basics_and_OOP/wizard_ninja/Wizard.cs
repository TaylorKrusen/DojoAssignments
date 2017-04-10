// Wizard should have a default health of 50 and intelligence of 25
// Wizard should have a method called heal, which when invoked, heals the Wizard by 10 * intelligence
// Wizard should have a method called fireball, which when invoked, decreases the health of whichever object it attacked by some random integer between 20 and 50

using System;

public class Wizard : Human {
    public Wizard(string person) : base(person) {
        health = 50;
        intelligence = 25;
    }
    public void heal() {
        this.health += 10 * this.intelligence;
    }

    public void fireball(object obj) {
        if (obj != null) {
            Random rand = new Random();
            Human enemy = obj as Human;
            enemy.health -= rand.Next(20,51);
        }
    }
}