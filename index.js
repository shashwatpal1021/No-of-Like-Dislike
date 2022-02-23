var count = 0;
let count = document.getElementById("number");

function reset(){
   count=0;
   document.getElementById("number").innerHTML = count;
}

function increment() {
   count++;
   document.getElementById("number").innerHTML = count;
}

function decrement(){
   count--;
   document.getElementById("number").innerHTML = count;
}




