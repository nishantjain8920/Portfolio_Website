const fadeElements = document.querySelectorAll('.fade-in');
function checkScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', checkScroll);
checkScroll();
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
