var slideIndex = 1;
ShowSlides(slideIndex);

function plusSlides(n){
    ShowSlides(slideIndex += n);
}

function currentSlide(n){
    ShowSlides(slideIndex = n);
}

function ShowSlides(n){
    var i;

    var slides = document.getElementsByClassName("mySlides");
    
    if(n > slides.length) { slideIndex = 1}
    if(n < 1) { slideIndex = slides.length}

    for(i = 0; i< slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}