 // Scroll and reveal animations
 const cards = document.querySelectorAll('.content-card');
        
 const observerOptions = {
     root: null,
     rootMargin: '0px',
     threshold: 0.1
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('active');
         }
     });
 }, observerOptions);

 cards.forEach(card => {
     observer.observe(card);
 });