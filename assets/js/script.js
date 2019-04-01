// toggle menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.getElementById('menu');

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}


function initMap() {
      //Map options

      var options = {
        zoom: 8,
        center: {lat: 41.729483, lng: 44.4884286}
      }

      // New Map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Add Marker
      var marker = new google.maps.Marker({
        position: {lat: 42.4668, lng: 45.9495}, // 41.7386896,44.7556937
        map:map,
        icon:'pin_map.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Machavariani STR. 6</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }


//სურათების ოპტიმიზაცია, დასქროლვამდე არ ჩაიტვირთოს

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } 
});

// Get the modal
var contact = document.getElementById('contact_form');

// Get the button that opens the modal
var bookBtn = document.getElementById("book");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
bookBtn.onclick = function() {
  contact.style.display = "block";
  //  თუ არის კლასი close, შეიცვალოს ბტნ x, თუ არაა დაემატოს კლასი
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  contact.style.display = "none";
  //x შეიცვალოს თავდაპირველი კონტენტით
}

// success send
var modal = document.getElementById('myModal');

var btn = document.getElementById("sendBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

// scroll to top
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if(window.pageYOffset > 300) { //show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")){
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { //hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")){
        backToTopButton.classList.remove("btnEntrance");
       backToTopButton.classList.add("btnExit");
   setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 500;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};
