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














































