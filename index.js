fetch('imageSlider.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                alert('error: ' + err);
            });

        function appendData(data) {
             $("#summer-img").attr("src", data[0].src);
             $("#winter-img").attr("src", data[1].src);
             $("#autumn-img").attr("src", data[2].src);
            }

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