// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
    var name =
     document.getElementById("name").value;
     var message = "<h2>Hello " + name + "!</h2>";// turns value into message
    document.getElementById("content").innerHTML = message;// puts message in content

  
    if (name === "student") {
      var title = 
        document.querySelector("#title").textContent;//gets the text in h1 title
      title += " & Lovin' it!";  // adds words to title
      document.querySelector("h1").textContent = title;  // puts changed text into title
    }
  }

  // Event handling (remove onclick from index.html to demonstrate)
document.addEventListener("DOMContentLoaded",
    function (event) {
      
      function sayHello (event) {
        this.textContent = "Said it!";
        var name = document.getElementById("name").value;
         var message = "<h2>Hello " + name + "!</h2>";
  
        document.getElementById("content").innerHTML = message;
  
        if (name === "student") {
          var title = document.querySelector("#title").textContent;
          title += " & Lovin' it!";
          document.querySelector("h1").textContent = title;
        }
      }
  
      // Unobtrusive event binding(no need for onclick in html page)
      document.querySelector("button").addEventListener("click", sayHello);
      document.querySelector("body")
      .addEventListener("mousemove",
        function (event) {
          if (event.shiftKey === true) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );

  }
);   
  
  
  // document.querySelector("button")
  //   .onclick = sayHello;