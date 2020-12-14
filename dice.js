console.log(document.querySelectorAll(".Score"));

let sum=0;
let add=0;
let count=0;
document.querySelectorAll("#roll")[0].addEventListener("click",playGame)



function playGame(){
    count++;

    if(count<=10){

    if(count%2 !==0){
        var a =document.querySelectorAll("#Random")[0].innerHTML= Math.floor(Math.random() * 6) + 1;
        sum =sum+a;    
        document.querySelectorAll(".Score")[0].innerHTML=sum;
    } 
    else{
        var b =document.querySelectorAll("#Random1")[0].innerHTML= Math.floor(Math.random() * 6) + 1;
        add =add+b;
        document.querySelectorAll(".Score1")[0].innerHTML=add;
        }
        return true;  
    }         
    else
    return false;
}
document.querySelectorAll("#refresh")[0].addEventListener("click", function(){
    location.reload();
})

console.log(count);


