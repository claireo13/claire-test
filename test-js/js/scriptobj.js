

//functions

function order(sidedish){
    // if(sidedish === undefined){
    //     sidedish = "chips";
    // }
    sidedish = sidedish || "whatever";
    console.log("chicken with " + sidedish);
}
order("noodles");
order();



// objects, new object method

var company = new Object();
console.log(company);

var company2 = new Object();
company2.name = "my business";
console.log(company2);

var company3 = new Object();
company3.ceo = new Object();
company3.ceo.firstname = "claire";
company3.ceo.favcolor = "blue";
console.log(company3);
console.log(company3.ceo.favcolor);

var stockpropname = "stock of company";

company[stockpropname] = 110;
console.log(company[stockpropname]);

company2[stockpropname] = 120;
console.log(company2[stockpropname]);


//better way to create objects, object literal


var bestcompany = {
    name: "clairebook",
    ceo: {
        firstname: "claire",
        favcolor: "blue"
    },
    stock: 110
};

console.log(bestcompany);



// functions, function factory

function makemultiplier (multiply){
   var myfunc = function (x){
        return multiply * x;
    };
    return myfunc;
};

var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(10));
var double = makemultiplier(2);
console.log(double(100));

//passing functions as arguments

function dooperationon (x, operation){
   return operation(x);
};

var result = dooperationon(5, multiplyby3);
console.log(result);
result = dooperationon(100, double);
console.log(result);






// "this" usually points to global window object. 

function test (){
    console.log(this);
};

test();

function test2 (){
    console.log(this);
    this.myname = "claire";
};

test2();
console.log(window.myname);


//Function constructors: using "new" to point "this" to an object

function Circle (radius) { //the constructor function
    this.radius = radius;  //this points to Circle and has a property radius(cannot return in constructor. new returns to var myCircle)
  }
  

  Circle.prototype.getArea = function (){  // the method of the constructor, used only once for every instance circle is used because of the inclusion of prototype
    return Math.PI * Math.pow(this.radius, 2);
    };
  
  
  var myCircle = new Circle(10); //creates new object and returns it to the var myCircle
  console.log(myCircle.getArea());
  
  var myOtherCircle = new Circle(20);
  console.log(myOtherCircle);


  // Object literals and "this"
var literalCircle = {  // same as new object
    radius: 10,
  
    getArea: function () {
      var self = this;    // create var self so second inner function increaseRadius "this" can refer to object
      console.log(this); // in an object literal "this" points to the object not the window, unless its a function in a function then include self, otherwise "this" will point to window
  
     
      var increaseRadius = function () {
        self.radius = 20;  //because its a function in a function we need to point to self first so "this" refers to object not window
      };
      increaseRadius();
      console.log(this.radius);
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle.getArea());

  // Closures
function makeMultiplier (multiplier) {
    // var multiplier = 2;
    function b() {
      console.log("Multiplier is: " + multiplier);
    }
    b();
  
  
    return (
        function (x) {
          return multiplier * x;
        }
  
      );
  }
  
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(10)); // its own exec env





//NAMESPACE AND IIFE

// use namespace so variables to overwrite each other when using same names

var name3 = "hello";
function sayHello(){
    console.log("hello " + name3);
}
sayHello();

//instead use fake namespace


var johnGreeter = {};
johnGreeter.name = "claire";
var greeting = "hello";
johnGreeter.sayHello = function(){
    console.log(greeting + johnGreeter.name);
}

johnGreeter.sayHello();


// alternative to using a namespace iife (immmediatley invoked function expression)

  (function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function () {
      console.log(greeting + yaakovGreeter.name);
    }
  
    window.yaakovGreeter = yaakovGreeter;
  
  })(window);

  yaakovGreeter.sayHello();



  (function (window) { //set window as parameter in an iife
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi ";
    johnGreeter.sayHi = function () {
      console.log(greeting + johnGreeter.name);
    }
  
    window.johnGreeter = johnGreeter; //expose johngreeter to global so it can be invoked
  
  })(window); // call window parameter

  johnGreeter.sayHello();