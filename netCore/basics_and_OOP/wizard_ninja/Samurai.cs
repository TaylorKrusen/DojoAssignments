
// Samurai should have a default health of 200
// Samurai should have a method called death_blow, which when invoked should attack an object and decreases its health to 0 if it has less than 50 health
// Samurai should have a method called meditate, which when invoked, heals the Samurai back to full health
// (optional) Samurai should have a class method called how_many, which when invoked, displays how many Samurai's there are. Hint you may have to use the static keyword
using System;

public class Samurai : Human {
    public static int count = 0;
    public Samurai(string person): base(person) {
        health = 200;
        count++;
    }
    public void death_blow(object obj) {
        attack(obj);
    }
    public new void attack(object obj) {
        Human enemy = obj as Human;
        if (enemy.health < 50) {
            enemy.health = 0;
        } else {
            base.attack(obj);
        }
    }
    public void meditate() {
        this.health = 200;
    }
    public static void how_many()
    {
        Console.WriteLine(count);
    }
}