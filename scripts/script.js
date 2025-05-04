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
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
 </header>
`;

//Create footer 
const footer = `
    <footer>
        <div class = "container">

         <!--Insert company logo-->
         <img src="images/portfolioLogoNoBg.png" alt="Daniel Velez: Creator of Portfolio" aria-label="Daniel Velez: Creator of Portfolio">

         <!--Create quick links container-->
         <div class = "quickLinks">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
         </div>

         <p><span>&copy; 2025 All Rights Reserved</span> Daniel Velez</p>
        </div>
    </footer>
`;

//Insert header and footer into page
document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
