function toggleMenu() {
    const submenu = document.getElementById("submenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}

// Optional: Close the submenu if clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        const submenu = document.getElementById("submenu");
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        }
    }
}