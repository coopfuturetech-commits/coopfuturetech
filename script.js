document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! We'll contact you soon.");
  this.reset();
});