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

//loops

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

//editing strings

var words = "Apple, Banana, Kiwi";
var word = words.slice(7, 13); 
console.log(word);

var str = "Please visit Microsoft!";
var rep = str.replace("Microsoft", "W3Schools");   
console.log(rep);

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); 
console.log(text3);

//convert text to an array

var txt ="a,b c|d,e";
var txtarray = txt.split(",");
console.log(txt);
console.log(txtarray);
console.log(txtarray[0]);

var txt2 ="a,b c|d,e";   
var txt2array = txt2.split(" ");
console.log(txt2array);

var txt3 ="a,b c|d,e";
var txt3array = txt3.split("|");
console.log(txt3array);