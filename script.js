// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Contact button click event
    const contactBtn = document.getElementById("contactBtn");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            alert("Thank you for your interest! Please contact me via phone or email.");
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple welcome message in console
    console.log("Welcome to Jitu Hadal's Personal Profile Website 🚀");

});
