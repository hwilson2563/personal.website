(function(){
	var portComponent={
		templateUrl:"portfolio.html",
		controller: function () {
			var vm = this;
			slideIndex = 1;
			showSlides(slideIndex);

			vm.plusSlides = function plusSlides(n) {
  			showSlides(slideIndex += n);
			}

			vm.currentSlide = function currentSlide(n) {
  			showSlides(slideIndex = n);
			}
			function showSlides(n) {
  			var i;
  			var slides = document.getElementsByClassName("mySlides");
  			var dots = document.getElementsByClassName("dot");
  			if (n > slides.length) {slideIndex = 1}    
  			if (n < 1) {slideIndex = slides.length}
  			for (i = 0; i < slides.length; i++) {
      		slides[i].style.display = "none";  
  			}
  			for (i = 0; i < dots.length; i++) {
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