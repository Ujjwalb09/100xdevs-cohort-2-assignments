// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->


let counter = 1;

function recur(){
   setTimeout(()=>{
     console.clear();
     console.log(counter++);
     recur();
   }, 1000)
}

recur();





































































// (Hint: setTimeout)