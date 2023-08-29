// const { set } = require("express/lib/response")

const clickIcon = document.querySelector(".hamburger")
const navToggle = document.querySelector('.nav-bar')
const slideShow = document.querySelector('.container')
const navLinks = document.querySelectorAll("li");



function changeHere(e){
  const myTarget = e.target
  if(myTarget.nextElementSibling.classList.contains("hidden")){
    navToggle.classList.remove('hidden')
    navToggle.classList.add("")

  }
  else{
    navToggle.classList.add('hidden')
    navToggle.classList.add("nav")
  }
}

const setActiveLink = (e)=>{
  [].forEach.call(navLinks,(link)=>{
    link.classList.remove("active")
  } );
e.target.classList.add("active")
}


navLinks.forEach(link =>{
link.addEventListener("click", setActiveLink)

})




// let i = 0
// let image =[]
// let time = 4000

// image[0] = "./assets//spice1.jpeg"
// image[1] = "./assets//spice2.jpeg"
// image[2] = "./assets/spice1.jpeg"


// function slideImage(){
//   const img = document.querySelector("img")
//   img.src = image[i]
//   if(i < image.length -1){
//     i++
//   }
//   else {
//     i =0
//   }

// setTimeout("slideImage()", time)
//  }

// window.onload = slideImage

// window.onload = setActiveLink




// Products 

const products =[
  {id:1, name: "Shoe", price:"45", mainPrice:"30", image: "./assets/spice1.jpeg", details: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni", ship: "Ship from Forth Smith to anywhere $30"},
  {id:2, name: "Toy", price:"105",  mainPrice:"75", image: "./assets/beatie.jpg",  details: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni", ship: "Ship from Forth Smith to anywhere $50"},
  {id:3, name: "Earing", price:"60",  mainPrice:"47", image: "./assets/spice2.jpeg",  details: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni", ship: "Ship from Forth Smith to anywhere $90"},
  {id:4, name: "Hand bag", price:"90",  mainPrice:"67", image: "./assets/beati.jpg",  details: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni", ship: "Ship from Forth Smith to anywhere $100"},
]


let cart = []

const alertBox = document.querySelector(".alert")

function addToCart(productId){
cart.push(products[productId])
cartCount()
showDetails(productId)

}

function cartCount(){
  const countEl = document.querySelector(".cart-count")
  const countEl2 = document.querySelector(".cart-count2")
countEl2.textContent = cart.length
  countEl.innerHTML = cart.length
}

function showDetails(itemId){
  alertBox.classList.remove("hidden")
  const product = products[itemId]
  alertBox.innerHTML = `
    <h3 class="text-green-500">${`${products[itemId].name} added`}</h3>
    <ion-icon 
    onclick="closeModal()"
    class="absolute cursor-pointer top-3 right-3 text-black text-3xl"
    name="close-outline"
  ></ion-icon>
  <div class="flex gap-5 items-center">
  <div class="mt-[2rem]">
  <img class="w-[10rem] h-[10rem] d-img" src=${product.image} alt="" />
  <div>
  <p class="text-[15px] ">${product.details}</p>
  <h1 class="name text-xl font-bold text-blue-500">${product.name}</h1>
  <p class="text-md text-yellow-600 border-1 border-yellow-600">60% Discount</p>

  <p class="text-sm p-3">${product.ship}</p>
  <div class="flex items-end justify-end gap-3">
  <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">Complete order</button>
  <a href="tel:+2347063135569" class="shadow-yellow-600 shadow-md text-yellow-600 px-4 py-2 rounded-lg"><ion-icon name="call-outline"></ion-icon></a>

  </div>
  </div>
  </div>
  </div>
  `

}
function closeModal (){
  alertBox.classList.add("hidden")
}

const displayProducts = ()=>{
  const productContainer = document.querySelector(".product-list")
  
  const classes = ["grid", "w-full", "grid-cols", "md:grid-cols-3", "gap-10", "py-7"]


  
  products.map((product, index)=>{

    const productDiv = document.createElement("div")
    productDiv.className = "md:grid,w-full,flex flex-col, md:grid-cols-3,md:gap-10 m-4"
    productDiv.innerHTML = `
    <div class="bg-white p-1">
    <img class="md:w-[17rem] w-[100%] h-[10rem]" src=${product.image} alt="" />
    <div class="product-details py-4 gap-3">
      <h1 class="name text-2xl pb-3">${product.name}</h1>
      <div class="price-tag flex">
        <p class="price line-through pr-3">$${product.price}</p>
        <p class="price">$${product.mainPrice}</p>
      </div>
    </div>
   
    <button onclick="addToCart(${index})" 
      class="py-2 px-4 bg-blue-600 outline-none w-full rounded-lg pointer text-white"
    >
      Buy now
    </button>
  </div>
    `
    productContainer.appendChild(productDiv)
  })

}

// const showDetails = (itemId)=>{{
//   const product = products[itemId]
//   const itemContainer = document.querySelector(".item-container")
 
//   console.log(product);
//   const detailsBox = document.createElement("div")

//   product.map(item=>(
//     detailsBox.innerHTML = `
//     <img class="w-10 h-11 d-img" src={${item.image}} alt="" />
//     <h1 class="name text-lg font-bold d-text">{${item.name}}</h1> 
//     `
//   ))
//   itemContainer.appendChild(detailsBox)
// }}

displayProducts()
cartCount()




































