// const { set } = require("express/lib/response")

const clickIcon = document.querySelector(".hamburger")
const navToggle = document.querySelector('.nav-bar')
const slideShow = document.querySelector('.container')
const navLinks = document.querySelectorAll("li");



function changeHere(e){
  const myTarget = e.target
  if(myTarget.nextElementSibling.classList.contains("hidden")){
    navToggle.classList.remove('hidden')
    slideShow.style.marginTop = "340px"
    navToggle.classList.add("")

  }
  else{
    navToggle.classList.add('hidden')
    slideShow.style.marginTop =""
    navToggle.classList.add("nav")
  }
}

const setActiveLink = (e)=>{
  [].forEach.call(navLinks,(link)=>{
    console.log(link);
    link.classList.remove("active")
  } );
e.target.classList.add("active")
}


navLinks.forEach(link =>{
link.addEventListener("click", setActiveLink)

})




let i = 0
let image =[]
let time = 4000

image[0] = "./assets//spice1.jpeg"
image[1] = "./assets//spice2.jpeg"
image[2] = "./assets/spice1.jpeg"


function slideImage(){
  const img = document.querySelector("img")
  img.src = image[i]
  if(i < image.length -1){
    i++
  }
  else {
    i =0
  }

setTimeout("slideImage()", time)
 }

window.onload = slideImage

// window.onload = setActiveLink












































