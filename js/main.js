var speed = 120;
var i = 0;
var txt = "Phasmophobia."
var txt_shop = "Phasmophobia shop"
var txt_cart = "Shopping cart"
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
const removeCartItemBtn = document.getElementsByClassName("item_remove_btn")


window.onload = () => {

    for(var i = 0; i < removeCartItemBtn.length; i++){
        var button = removeCartItemBtn[i];
        button.addEventListener('click', function (event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove();
            countTotal();
        })
    }

    if(sPage == "cart.html") {
      countTotal();
    }

    typeWriter();
    scrollFunction()
}



function hoi(){
  console.log("hoi")
}

// function countTotal(){
//     var productPrices = 0
//     var totalPrice = document.querySelector("[data-total-price]")
//     if (document.querySelectorAll("[data-price]").length > 0) {
//         document.querySelectorAll("[data-price]").forEach(product => {
//             productPrices = productPrices + parseInt(product.innerText)
//             totalPrice.innerText = productPrices
//         });
//     }
//     else {
//         totalPrice.innerText = 0
//     }
// }


function countTotal(){
    var productPrices = 0
    var totalPrice = document.querySelector("[data-total-price]")
    if (document.querySelectorAll("[data-price]").length > 0) {
        document.querySelectorAll("[data-product]").forEach(product => {
            var quantity = product.querySelector("[data-quantity]").value
            var prices = product.querySelector("[data-price]").innerText
            productPrices = parseInt(prices) * parseInt(quantity) + parseInt(totalPrice.innerText)
            totalPrice.innerText = productPrices
        });
    } else {
        totalPrice.innerText = 0
    }
}



function typeWriter() {
    if (i < txt.length && sPage == "index.html") {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else if (i < txt_shop.length && sPage == "shop.html"){
      document.getElementById("typewriter_shop").innerHTML += txt_shop.charAt(i);
      i++;
      setTimeout(typeWriter, speed)
    }
    else if (i < txt_shop.length && sPage == "cart.html"){
      document.getElementById("typewriter_cart").innerHTML += txt_cart.charAt(i);
      i++;
      setTimeout(typeWriter, speed)
    }

  }

function scrollFunction() {
  //Get the button
var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

