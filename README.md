# ps-js-object-and-prototypes

Pluralsite JS - Objects and Prototypes

## Module 1 - JS Objects Intro

* object literal
* constructor
* object.create
* ES6 'Classes'

## Module 2 - Properties

* bracket notation: `display(cat['eye color'])`
* writable: false
  * can be broken by making the property an object (making the pointer readonly)
    * can be fixed by `Object.freeze(property)`
* enumerable - prvent a propety from:
  1. appearing in keys
  1. being looped in a for loop
  1. JSON serialization
* configurable:
  * cannot `delete`
  * cannot `enemerable`
  * **can** change `writable`

* Getters and Setters

```javascript
Object.defineProperty(object, property,
     {
         get: function() { return this.... },
         set: function(value) { this.propety = value; }
     }
   )
```

## Module 3 - Prototypes & Inheritance

* prototype
  * functions have `prototype` property: the object **instance** that will become the prototype for all objects created using this function as a constructor
  * objects have `__proto__` property: object instance from which the object is inherited
  * these are objects (not like a class). Functions have a prototpye created that is attached in the backend.  Similarly, objects have a \_\_proto\_\_ created that point at the same instance

* `new` keyword
  * create an empty object `function MyObject() {}`
  * add a new property to our object `MyObject.prototype.age = 1;`
  * use `new` keyword to create an object "MyObject"
  * `var name = new MyObject()`
    * creates new object
    * add \_\_proto\_\_ property, which is a pointer to MyObject.prototype
    * executes MyObject constructor function
  * if the object instance doesn't have a certain property, JS will then check it's protoype for that property

* Inheritance
  * use `Object.create()` since `new` would execute the create function