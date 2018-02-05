(function(){
	var portComponent={
		templateUrl:"portfolio.html",
		controller: function () {
			var vm = this;
			slideIndexOne = 1;
			slideIndex = 1;
			showSlides(slideIndex);
			showSlidesOne(slideIndexOne);

			vm.plusSlides = function plusSlides(n) {
  			showSlides(slideIndex += n);
			}

			vm.currentSlide = function currentSlide(n) {
  			showSlides(slideIndex = n);
			}
			function showSlides(n) {
   			var slides = document.getElementsByClassName("mySlides");
  			var dots = document.getElementsByClassName("dot");
  			if (n > slides.length) {slideIndex = 1}    
  			if (n < 1) {slideIndex = slides.length}
  			for (var i = 0; i < slides.length; i++) {
      		slides[i].style.display = "none";  
  			}
  			for (var i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
  			}
  			slides[slideIndex-1].style.display = "block";  
  			dots[slideIndex-1].className += " active";
			}
			vm.plusSlidesOne = function plusSlides(n) {
  			showSlidesOne(slideIndex += n);
			}

			vm.currentSlideOne = function currentSlide(n) {
  			showSlidesOne(slideIndex = n);
			}
			function showSlidesOne(n) {
   			var slides = document.getElementsByClassName("mySlidesOne");
  			var dots = document.getElementsByClassName("dotOne");
  			if (n > slides.length) {slideIndex = 1}    
  			if (n < 1) {slideIndex = slides.length}
  			for (var i = 0; i < slides.length; i++) {
      		slides[i].style.display = "none";  
  			}
  			for (var i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
  			}
  			slides[slideIndex-1].style.display = "block";  
  			dots[slideIndex-1].className += " active";
			}
		}
		
	}
	angular
	.module("app")
	.component("portComponent", portComponent)
})();