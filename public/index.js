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
    console.log(link);
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
  {id:1, name: "Shoe", price:"45", mainPrice:"30", image: "./assets/spice1.jpeg"},
  {id:2, name: "Toy", price:"105",  mainPrice:"75", image: "./assets/beatie.jpg"},
  {id:3, name: "Earing", price:"60",  mainPrice:"47", image: "./assets/spice2.jpeg"},
  {id:4, name: "Hand bag", price:"90",  mainPrice:"67", image: "./assets/beati.jpg"},
]


let cart = []

const alertBox = document.querySelector(".alert")

function addToCart(productId){
cart.push(products[productId])
cartCount()

  alertBox.classList.remove("hidden")
  alertBox.innerHTML = products[productId] && `${products[productId].name} added`
  setTimeout(() => {
    alertBox.style.display = "none"
    
  }, 3000);
    alertBox.style.display = ""

}

function cartCount(){
  const countEl = document.querySelector(".cart-count")
  const countEl2 = document.querySelector(".cart-count2")
countEl2.textContent = cart.length
  countEl.innerHTML = cart.length
}

const displayProducts = ()=>{
  const productContainer = document.querySelector(".product-list")
  
  const classes = ["grid", "w-full", "grid-cols", "md:grid-cols-3", "gap-10", "py-7"]


  
  products.map((product, index)=>{

    const productDiv = document.createElement("div")
    productDiv.className = "md:grid,w-full,flex flex-col, md:grid-cols-3,md:gap-10 m-4"
    console.log(index);
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
    <a href="itemDetails.html" onclick="showDetails(${index})">see details</a>
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

const showDetails = (itemId)=>{{
  const product = products[itemId]
  const itemContainer = document.querySelector(".item-container")
 
  console.log(product);
  const detailsBox = document.createElement("div")

  product.map(item=>(
    detailsBox.innerHTML = `
    <img class="w-10 h-11 d-img" src={${item.image}} alt="" />
    <h1 class="name text-lg font-bold d-text">{${item.name}}</h1> 
    `
  ))
  itemContainer.appendChild(detailsBox)
}}

displayProducts()
cartCount()




































