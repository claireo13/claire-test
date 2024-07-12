// arrays


var list = new Array();
list[0] = "claires array";
list[1] = 2;
list[2] = function (name){
console.log("hello " + name);
};
list[3] = {course: "HTML, css, js"};
console.log(list);
list[2](list[0]);
console.log(list[3].course);

//shorthand array notation

var names = ["Claire", "ben", "moussa" ];

console.log([0]);

console.log(names);

console.log(names[0]);

for (var i = 0; i < names.length; i++ ){
console.log("hello " + names[i] );
};

//loop properties in objects

var myobj = {
name: "claire",
course:"html",
platform: "coursera"
};
for (var prop in myobj){
console.log(prop + ": " + myobj[prop]);
};

//same loop in an array

var names2 = ["Claire", "ben", "moussa" ];

for (var ourname in names2){
    console.log("hi " + names2[ourname]);
}