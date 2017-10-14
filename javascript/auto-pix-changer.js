var slideIndex = ['Pic1.jpg','Pic2.jpg','Pic3.jpg'];
carousel();

function carousel(){
	var i;
	var x = document.getElementByClassName ("no-vid-img");
			for (i = 0; i < x.length; i++){
				x[i].style.display="none";
			}
			slideIndex++;
			if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].display = "block";
setTimeout(carousel, 2000);
//Change image every 2 second
}