/* Grabbing all the question and save in a single variable */

const questions=document.querySelectorAll(".question");

/* Using the for-each to select the each questions */

questions.forEach(function(question){
    // grabbing the question buttons
    const btn=question.querySelector(".btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text");
            }
        })

        // using the method toggle in the classList object
        question.classList.toggle("show-text");
    })




})
