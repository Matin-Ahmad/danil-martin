
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Menutup menu setelah link diklik
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});
