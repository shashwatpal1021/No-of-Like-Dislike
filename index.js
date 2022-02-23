
let count = document.getElementById("number");

function reset(){
   count=0;
   document.getElementById("number").innerHTML = count;
}

function increment() {
   let count = 0;
   count++;
   document.getElementById("number").innerHTML = count;
}

function decrement() {
   let count = 0;
   count--;
   document.getElementById("number").innerHTML = count;
}




