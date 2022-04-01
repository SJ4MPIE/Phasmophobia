var speed = 120;
var i = 0;
var txt = "Phasmophobia."
var txt_shop = "Phasmophobia shop"
var txt_cart = "Shopping cart"
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

export function typeWriter() {
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


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

