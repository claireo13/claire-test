//primitives
var y =6;
var x = 5;
console.log(y);
console.log(x);
console.log (x+y);

var z ="6";
console.log(z);
console.log (z+y);

if (z == y){
    console.log("they are the same");
}
else {
    console.log("they are different");
}

if (z === y){
    console.log("they are strictly the same");
}
else {
    console.log("they are strictly different");
}

var greeting = "hello";

console.log(greeting +" "+ "everyone");

//loop

var sum = 0;
for (var i = 0; i<10; i++){
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

for ( var i= 0; i<10; i++){
    console.log(i);
}

var words = "hello everyone how are you"
for (var i = 0; i<words.length; i++){
}
console.log(i);