let home = 0
let guest = 0


 document.getElementById("p1").textContent = home
 document.getElementById("p2").textContent = guest
 
 
 
 function sum1 (){
    home = home + 1;
    document.getElementById("p1").textContent = home
     console.log(sum1)
 }
 function sum2 (){
     home = home + 2;
    document.getElementById("p1").textContent = home
 }
 function sum3 (){
     home = home + 3;
    document.getElementById("p1").textContent = home
 }
 function sum4 (){
     guest = guest + 1;
    document.getElementById("p2").textContent = guest
 }
 function sum5 (){
     guest = guest + 2;
    document.getElementById("p2").textContent = guest
 }
 function sum6 (){
     guest = guest + 3;
    document.getElementById("p2").textContent = guest
 }
