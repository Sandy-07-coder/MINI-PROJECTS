// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

/* Date */

const date=document.getElementById("date");

date.innerText=new Date().getFullYear();


/* Nav toggle */

const navToggle=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");

navToggle.addEventListener("click",function(){
   /*  linksContainer.classList.toggle("show-links"); */
    //we need to get the height of the container and links
    const containerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    
    if(containerHeight===0){
        linksContainer.style.height=`${linksHeight}px`;
    }
    else{
        linksContainer.style.height=0;
    }
})

/* fixed navbar */

const navbar=document.getElementById("nav");
const topLink=document.querySelector(".top-link");

window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
    //setuping back to top button when we scroll

    if(scrollHeight>500){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-link");
    }
    
})

/* SMOOTH SCROLL */
// Select links

const scrollLinks=document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        //preventing the default html behaviour
        e.preventDefault();

        //navigate to specific spot
        const id=e.currentTarget.getAttribute("href").slice(1);
        const element=document.getElementById(id);
        
        const navHeight=navbar.getBoundingClientRect().height;
        const containerHeight=linksContainer.getBoundingClientRect().height;
        const fixedNav=navbar.classList.contains("fixed-nav");
        let position=element.offsetTop-navHeight;
        
        if (!window.matchMedia("(min-width: 800px)").matches) {
            console.log("working")
            position=position+containerHeight;


        }

        


        window.scroll({
            left:0,
            top:position,
            behavior:"smooth"
        });

        /* close the navbar for smaller dives after clicking a link*/

        linksContainer.style.height=0;
    })
})