'use strict';

function cat(name, color) {
    this.name = name;
    this.color = color;
}

var fluffy = new cat('Fluffy', 'White');

display(cat.prototype);
display(fluffy.__proto__)