// Open the Modal for a specific gallery
function openModal(galleryId, slideIndex) {
    document.getElementById("myModal-" + galleryId).style.display = "block";
    currentSlide(slideIndex, galleryId);
  }
  
  // Close the Modal for a specific gallery
  function closeModal(galleryId) {
    document.getElementById("myModal-" + galleryId).style.display = "none";
  }
  
  function plusSlides(n, galleryId) {
    showSlides(slideIndex += n, galleryId);
  }
  
  // Control the current slide in the gallery
  function currentSlide(n, galleryId) {
    slideIndex = n;
    showSlides(slideIndex, galleryId);
  }
  
  function showSlides(n, galleryId) {
    var i;
    var slides = document.getElementsByClassName(galleryId + "-slide");
    var dots = document.querySelectorAll(`#${galleryId} .demo`);
    var captionText = document.getElementById("caption-" + galleryId);
  
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
  