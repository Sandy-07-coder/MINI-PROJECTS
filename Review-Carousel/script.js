// Creating object

const reviews=[
{
    id: 1,
    name: "Andria",
    job: "Web Developer",
    img: "Images/Profile01.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    id: 2,
    name: 'Alice',
    job: 'Web Designer',
    img: "Images/Profile02.jpg",
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
  },
  {
    id: 3,
    name: 'Luffy',
    job: 'Intern',
    img: "Images/Profile03.jpg",
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
  },

  {
    id: 4,
    name: 'Lucia',
    job: 'Database Manager',
    img: 'Images/Profile04.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  }

]

// Grabbing the elements

const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

// buttons

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn")
const randomBtn=document.querySelector(".random-btn")
console.log(randomBtn)

// set starting item

let currentItem=0;

// loading initial item

window.addEventListener("DOMContentLoaded",function(){
  showPerson(currentItem);

})


function showPerson(person){
  const item=reviews[person];
  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.text;
}

nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem>reviews.length-1){
    currentItem=0;
  }
  showPerson(currentItem);
  
})

prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length-1;
  }
  showPerson(currentItem);
})

randomBtn.addEventListener('click',function(){
  const random=getRandom();
  currentItem=random;
  showPerson(currentItem)
})

function getRandom(){
   const random=Math.floor(Math.random()*(reviews.length));
   return random;
}


