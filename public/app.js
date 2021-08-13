function myFunction(){
    var dots=document.getElementById("dots");
    var moreText=document.getElementById("more");
    var btnText=document.getElementById("myBtn");
    
    if(dots.style.display==="none"){
        dots.style.display="inline";
        btnText.innerHTML="read more";
        moreText.style.display="none";
    }
    else{
        dots.style.display="none";
        btnText.innerHTML="read less";
        moreText.style.display="inline";
    }
}

function myGal(){
    var btn=document.getElementById("gal-btn");
    var gallery=document.getElementById("photos");
    if(btn.innerHTML=="Show Gallery"){
        btn.innerHTML="Hide Gallery";
        btn.style.margin="15px 0";
        gallery.style.display="flex";
    }
    else{
        btn.innerHTML="Show Gallery";
        gallery.style.display="none"
        btn.style.margin="15 0";
    }
}



    function openModal() {
        if (window.screen.width > 780) {
            document.getElementById("myModal").style.display = "block"; 
            }
    }
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
    var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1){
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }