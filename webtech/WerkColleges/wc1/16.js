Vehicle = function(color, hp) {
  this.color = color;
  this.hp = hp;
}
Vehicle.prototype.getColor = function() { return this.color; }
Vehicle.prototype.getHp = function() { return this.hp; }
Vehicle.prototype.toString = function() { return this.color + " vehicle with " + this.hp + " hp"; }

Car = ...

var v = new Vehicle("blue", 50);
var c = new Car("red", 110, "GP-31-R");
