function personConstructor(name) {
  var person = {
    name : name,
    distance_traveled : 0,
    say_name: function(){
      console.log(person.name);
    },
    say_something: function(message){
      console.log(person.name, 'says', message);
    },
    walk: function() {
      console.log(person.name, 'is walking...')
      person.distance_traveled += 3;
      return person;
    },
    run: function() {
      console.log(person.name, 'is running...')
      person.distance_traveled += 10;
      return person;
    },
    crawl: function() {
      console.log(person.name, 'is crawling...')
      person.distance_traveled += 1;
      return person;
    },
    chewGum:function(){
      console.log("I can walk and chew gum, but I can't chew gum and walk...");
    }
  }
  return person;
}
var dude = personConstructor('Taylor');

dude.crawl().say_something('sup bruh?');


function ninjaConstructor(name, cohort){
  var ninja = {}
  var belts = ['yellow', 'red', 'black']
  ninja.name = name,
  ninja.cohort = cohort,
  ninja.beltLevel = 0;
  ninja.levelUp = function(){
    if (ninja.beltLevel < 2) {
      ninja.beltLevel += 1;
      ninja.belt = belts[ninja.beltLevel];
    }
    return ninja
  }
  ninja.belt = belts[ninja.beltLevel];
  return ninja
}

var guy = ninjaConstructor('Jace', 'Feb 17');
console.log(guy);
guy.levelUp();
console.log(guy);
