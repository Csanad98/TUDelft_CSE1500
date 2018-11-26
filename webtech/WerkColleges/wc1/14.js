//Implement a class Person with a property name and two 
//methods getName and setName to get and set its value.

//define constructor
Person = function(name) {
    this.name = name;

    Person.prototype.getName = function() {
        return this.name;
    }

    Person.prototype.setName = function(name) {
        this.name = name;
    }

}



var p = new Person("Bob");
console.log(p.getName());  //Bob
p.setName("Robert");
console.log(p.getName()); //Robert
