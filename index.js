
let x= document.getElementById("number");
let count = 0;

function reset() {
   count = 0;
   x.innerHTML = count;
}

function increment() {
   count++;
   x.innerHTML = count;
}

function decrement() {
   count--;
   x.innerHTML = count;
}



