// Scroll Animations setup
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    // Track all sections for scroll animation
    const animatedSections = document.querySelectorAll(".section-scroll");
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});