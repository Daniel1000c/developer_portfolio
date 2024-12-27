//Create fill animation for progress bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progressFill");
    
    progressBars.forEach(bar => {
        const targetPercentage = bar.getAttribute("data-percentage").replace("%", "");
        bar.style.setProperty("--target-width", `${targetPercentage}%`);
    });
});