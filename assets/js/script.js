// burger მენიუ

var burger = document.getElementById('burger'),

menu = document.getElementById('menu'),

burger_item = document.querySelectorAll(".burger_item");

document.getElementById("burger").addEventListener("click", function(){
 
	burger_item[0].classList.toggle("animate0")
	burger_item[1].classList.toggle("hide");
	burger_item[2].classList.toggle("animate2");
	menu.classList.toggle("active");
})

// რუკის შემოტანა
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
