//Create scroll to top function

//Get the button id
let myBtn = document.getElementById("myBtn");

//Get header element
const header = document.querySelector("header");

//Get offset height of header
const sticky = header.offsetTop;

//When the user scrolls, call the scroll and sticky functions
window.onscroll = function () {
    scrollFunction();
    stickyHeader();
}

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

//Create sticky header function
function stickyHeader() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
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


//Select only sections with scrollAppear class
const appearScrollSections = document.querySelectorAll('.scrollAppear');

//Create new observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //Add appear class to element
            entry.target.classList.add('appear');
            //Stop observing the element
            observer.unobserve(entry.target);
        } 
    });
}, {
    threshold: 0.1
});

//Start observing each element
appearScrollSections.forEach(section => {
    observer.observe(section);
});



