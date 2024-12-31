//Create scroll to top function

//Get the button id
let myBtn = document.getElementById("myBtn");

//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

//Create scroll function
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

//When the user clicks on the button, scroll to the top of the document
function topFunction () {
    document.body.scrollTop = 0;// For safari browsers
    document.documentElement.scrollTop = 0; // For chrome, firefox, IE and Opera browsers
}