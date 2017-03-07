// First we create the constructor function for our vehicles...
function VehicleConstructor(name, wheels, passengers,speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengers, speed);
  }
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distance_traveled = 0;

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
