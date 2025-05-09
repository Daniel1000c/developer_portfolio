//Create header 
const header = `
 <header>
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><span>Daniel</span> Velez</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
 </header>
`;

//Insert header into page
document.getElementById('header').innerHTML = header;

//Highlight active nav link based on current page
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

//Create for each loop for each link
navLinks.forEach(link => {
    const pageLink = link.getAttribute('href');

    if (pageLink === currentPage) {
        link.classList.add('active');//Add active class to current page
    } else {
        link.classList.remove('active');//Remove active class
    }
});

//Create footer 
const footer = `
    <footer>
        <div class = "container">

         <!--Insert company logo-->
         <img src="images/portfolioLogoNoBg.png" alt="Daniel Velez: Creator of Portfolio" aria-label="Daniel Velez: Creator of Portfolio">

         <!--Create quick links container-->
         <div class = "quickLinks">
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="projects.html">Projects</a>
            <a href="contact.html">Contact</a>
         </div>

         <p><span>&copy; 2025 All Rights Reserved</span> Daniel Velez</p>
        </div>
    </footer>
`;



//Insert page header and footer into page

document.getElementById('footer').innerHTML = footer;


const pageHeaderElement = document.getElementById('pageHeader');

//Create if statement to see if page header exists on page
if (pageHeaderElement) {
    //Create section page header path
    const path = window.location.pathname;
    const pageName = path.split("/").filter(Boolean).pop().replace(".html", "");

    //Capitalize first letter of page name
    const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    //Create section page header
    const pageHeader = `
        <section id="pageHeader">
            <h2>${pageTitle}</h2>
            <h6>Home &#8594; ${pageTitle}</h6>
        </section>
    `;   
    
    //Insert page header into page
    document.getElementById('pageHeader').innerHTML = pageHeader;
}
