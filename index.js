
let count = document.getElementById("number");

function reset() {
   
   document.getElementById("number").innerHTML = count;
}

function increment() {
   count++;
   document.getElementById("number").innerHTML = count;
}

function decrement() {

   count--;
   document.getElementById("number").innerHTML = count;
}




