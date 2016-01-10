function fact(n){
    var m=1;
    while(n){
         m=m*n;
         n--;
    }

    var el = document.getElementById('result'); 
    el.innerHTML = "Factorial of given number :"+" "+ m;
    }
function clearAnswer(){
     document.getElementById("result").innerHTML = '';
     document.getElementById("text").value = '';
   }