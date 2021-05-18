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
function ShowTabs(TypeOfTab){
    var regularSpan = document.getElementById("card-navbar-regular");
    var plusSpan = document.getElementById("card-navbar-plus");
    var premiumSpan = document.getElementById("card-navbar-premium");
    var i;

    var tabs = document.getElementsByClassName("card");
    for(i = 0; i< tabs.length; i++){
        tabs[i].style.display = "none";
        regularSpan.style.backgroundColor = "lightgray";
        regularSpan.style.borderTop = "none";

        plusSpan.style.backgroundColor = "lightgray";
        plusSpan.style.borderTop = "none"
        
        premiumSpan.style.backgroundColor = "lightgray";
        premiumSpan.style.borderTop = "none"

    }

    if(TypeOfTab === "regular"){
        tabs[0].style.display = "flex";
        regularSpan.style.backgroundColor = "white";
        regularSpan.style.borderTop = "3px solid blue";
    }
    else if(TypeOfTab === "plus"){
        tabs[1].style.display = "flex";
        plusSpan.style.backgroundColor = "white";
        plusSpan.style.borderTop = "3px solid blue";

    }
    else if(TypeOfTab === "premium"){
        tabs[2].style.display = "flex";
        premiumSpan.style.backgroundColor = "white";
        premiumSpan.style.borderTop = "3px solid blue";

    }
}