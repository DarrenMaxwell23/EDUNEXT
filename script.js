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


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const rotateX = (centerY - clientY) / 10;
        const rotateY = (clientX - centerX) / 10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(15deg) rotateY(-15deg)';
    });
});