'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt'
 }

Animal.prototype.speak = function() {
    display(this.voice);
}

function Cat(name, color) {
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

function Dog(name, color) {
    Animal.call(this, 'Bark');
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

var fluffy = new Cat('Fluffy', 'White');
var leo = new Dog('Leo', 'piebald');

fluffy.speak();
leo.speak();

display(fluffy);
display(leo);
display(Cat);
display(Dog);