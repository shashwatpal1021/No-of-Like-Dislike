
let count = document.getElementById("number");

function reset(){
   document.getElementById("number").innerHTML = 0;
}

function increment() {
   count++;
   document.getElementById("number").innerHTML = count;
}

function decrement() {

   count--;
   document.getElementById("number").innerHTML = count;
}




