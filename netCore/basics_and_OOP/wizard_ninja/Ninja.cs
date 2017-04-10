// Ninja should have a default dexterity of 175
// Ninja should have a steal method, which when invoked, attacks an object and increases the Ninjas health by 10
// Ninja should have a get_away method, which when invoked, decreases its health by 15

public class Ninja : Human {
    public Ninja(string person) : base(person) {
        dexterity = 175;
    }
    public void steal(object obj) {
        base.attack(obj);
        this.health += 10;
    }
    public void get_away(){
        this.health -= 15;
    }
}
