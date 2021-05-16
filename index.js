fetch("public/imageSlider.json")
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

             $("#summer-desc").text(data[0].description);
             $("#winter-desc").text(data[1].description);
             $("#autumn-desc").text(data[2].description);
             
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