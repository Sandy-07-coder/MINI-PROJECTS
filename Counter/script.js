//Grabbing the elements

const valueEl=document.getElementById("value-el");
const btns=document.querySelectorAll(".btn");
const logEl=document.getElementById("log");

//count variable

let count=0;

btns.forEach(function(button){
    button.addEventListener("click",function(e){
        const style=e.currentTarget.classList;
        if(style.contains("inc")){
            count++;
            valueEl.innerText="Count: "+count;
        }
        if(style.contains("save")){
            logEl.innerText+=count+"-";
            count=0;
            valueEl.innerText="Count: "+count;
        }
        if(style.contains("dec") && count>0){
            count--;
            valueEl.innerText="Count: "+count; 
        }
        if(count>0){
            valueEl.setAttribute("style","color:blue;")
        }
        if(count==0){
            valueEl.setAttribute("style","color:black")

        }
    })
})