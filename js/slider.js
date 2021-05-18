var slideIndex = 0;
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
    var descriptions = document.getElementsByClassName("description");
    
    if(n > slides.length) { slideIndex = slides.length}
    if(n < 1) { slideIndex = 1}

    for(i = 0; i< slides.length; i++){
        slides[i].style.display = "none";
        descriptions[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    descriptions[slideIndex-1].style.display = "block";
}