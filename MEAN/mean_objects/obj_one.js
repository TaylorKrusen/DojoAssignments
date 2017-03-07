// setting up the constructor function for making vehicles
function VehicleConstructor(name,wheels,passengers, speed) {
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengers,speed);
  }
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.makeNoise = function () {
    console.log('BEEEEEEP');
  }
  this.speed = speed;
  this.move = function() {
  // we can call our private function since we are still in the function scope.
  updateDistanceTraveled();
  this.makeNoise();
  }
  this.checkMiles = function() {
    console.log(distance_travelled);
}
  // privates!
  var distance_travelled = 0;
  var self = this;
  function updateDistanceTraveled(){
    distance_travelled += self.speed;
    console.log(distance_travelled);
  }
}

// creating our bike vehicle
var bike = new VehicleConstructor('Bike of Destiny', 2, 3, 12);
// redefining the nosie our bike makes
bike.makeNoise = function (){
  console.log('ring ring!')
}
bike.makeNoise();
bike.move();

// creating our sedan vehicle
var sedan = new VehicleConstructor('Dope Car', 4, 6, 65);
// redefining the noise our sedan makes
sedan.makeNoise = function (){
  console.log('Honk honk honk!')
}

sedan.makeNoise();

// creating our bus
var bus = new VehicleConstructor('Sweet Bus', 8, 8, 40);
// creating a method for our bus to pickup passengers
bus.pickUp = function(riders){
  bus.passengers += riders;
  return bus
}
bus.pickUp(2);
console.log(bus);
