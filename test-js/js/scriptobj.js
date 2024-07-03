

//function

function order(sidedish){
    // if(sidedish === undefined){
    //     sidedish = "chips";
    // }
    sidedish = sidedish || "whatever";
    console.log("chicken with " + sidedish);
}
order("noodles");
order();



// object

var company = new Object();

console.log(company);