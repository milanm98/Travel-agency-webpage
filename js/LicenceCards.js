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