document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    
    // Add hover effect to CTA button
    const ctaBtn = document.querySelector(".cta-btn");
    if (ctaBtn) {
        ctaBtn.addEventListener("mouseover", () => {
            ctaBtn.style.backgroundColor = "#003d82";
            ctaBtn.style.color = "white";
        });
        ctaBtn.addEventListener("mouseout", () => {
            ctaBtn.style.backgroundColor = "white";
            ctaBtn.style.color = "#007bff";
        });
    }
});
