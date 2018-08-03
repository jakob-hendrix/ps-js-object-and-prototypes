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
  * these are objects. Functions have a prototpye created that is attached in the backend.  Similarly, objects have a \_\_proto\_\_ created that point at the same instance