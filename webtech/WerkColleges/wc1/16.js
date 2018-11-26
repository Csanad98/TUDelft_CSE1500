//Given the class Vehicle below, implement a class Car that inherits
// from it. In addition, class Car contains a property plate and overrides
// method toString().




Vehicle = function(color, hp) {
  this.color = color;
  this.hp = hp;
}
Vehicle.prototype.getColor = function() { return this.color; }
Vehicle.prototype.getHp = function() { return this.hp; }
Vehicle.prototype.toString = function() { return this.color + " vehicle with " + this.hp + " hp"; }

//constructor
Car = function(color, hp, plate) {
  
  Vehicle.call(this, color, hp);
  this.plate = plate;
}


Car.prototype = new Vehicle(); //inherit all methods from superclass
Car.prototype.constructor = Car; //use the car constructor
Car.prototype.getPlate = function() {return this.plate;}
Car.prototype.toString = function () { 
  this.color + " vehicle with " + this.hp + " hp and plate " + this.plate; 

}


var v = new Vehicle("blue", 50);
var c = new Car("red", 110, "GP-31-R");
