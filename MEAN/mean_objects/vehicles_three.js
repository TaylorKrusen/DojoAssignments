// First we create the constructor function for our vehicles...
function VehicleConstructor(name,wheels,passengers,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengers,speed);
  }
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;
  // we need a variable with characters to pick randomly. This variable has to be declared BEFORE we call our VIN function.
  var string = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  this.vin = generateVIN();
  // we add our VIN function in our constructor class because we want to generate a unique number each time a new vehicle is made. If we placed that in our prototype then they would all have the same one.
  function generateVIN(){
    var vin = '';
    // we pick one character at random 17 different times
    for (var i = 0; i < 17; i+=1 ){
     // we use math floor and math random together so we have a whole interger
     vin += string[Math.floor(Math.random()*35)];
    }
    return vin;
  }
}

VehicleConstructor.prototype = {
  constructor: VehicleConstructor,
  makeNoise:function (noise){
    var noise = noise || 'beep beep';
    console.log(noise);
  },
  updateDistanceTraveled:function (){
    this.distance_traveled += this.speed;
    console.log(this.distance_traveled);
  },
  checkMiles:function (){
    console.log(this.distance_traveled);
  },
  move:function (){
    this.updateDistanceTraveled();
    this.makeNoise();
  },
}

var skateboard = new VehicleConstructor('Longboard', 4, 1, 20);
skateboard.move();

var segway = new VehicleConstructor('Silly standing thing', 2, 1, 35);
segway.makeNoise('Excuse me, sir, I am trying to segway here.');

var sedan = new VehicleConstructor('Car of destiny', 4, 6, 70);
sedan.move();
console.log(sedan.vin)
