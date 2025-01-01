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

//Create nav menu toggle function


//Get menu elements
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

//Toggle the menu and change the menu icon
menuIcon.addEventListener("click", (e) => {
    navMenu.classList.toggle("active");

    //Change the menu icon to x based on click
    if(navMenu.classList.contains("active")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
});

//Close menu if user clicks outside of it
document.addEventListener("click", (e) => {
   if(e.target.contains(e.target) && !menuIcon.contains(e.target)) {
    //Close the nav menu
    navMenu.classList.remove("active");

    //Change the menu icon to x based on click
    menuIcon.classList.replace("bx-x", "bx-menu");
   } 
});

//Prevent the menu from closing when user clicks inside of it
navMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});