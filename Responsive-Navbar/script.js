
//Grabbing the elements

const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");
const icon=document.querySelector(".fas");

navToggle.addEventListener("click",function(){
    
    if(links.classList.contains("show-links")){
        console.log("toggle clicked hidden")
        links.classList.remove("show-links");
        links.setAttribute("style","display:none");

    }
    else{
        console.log("toggle clicked shown");
        links.classList.add("show-links");
        links.setAttribute("style","display:block");

    }
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times")

})
