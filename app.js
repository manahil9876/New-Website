document.addEventListener("DOMContentLoaded", function() {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;
  
    setInterval(function() {
      slides[currentSlide].classList.remove("active");
  
      currentSlide++;
  
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      slides[currentSlide].classList.add("active");
    }, 3000); 
  });
  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;
  
    setInterval(function() {
      slides[currentSlide].classList.remove("active");

      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      slides[currentSlide].classList.add("active");
    }, 3000); 
  });
    