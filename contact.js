document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('fa-times');
    hamburgerMenu.classList.toggle('fa-bars');
  });
  
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      hamburgerMenu.classList.remove('fa-times');
      hamburgerMenu.classList.add('fa-bars');
    });
  });
  
 
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('.btn-text');
      const originalText = btnText.textContent;
      
      submitBtn.disabled = true;
      btnText.textContent = 'Sending...';
      
      setTimeout(() => {
        alert('Message sent successfully!');
        contactForm.reset();
        submitBtn.disabled = false;
        btnText.textContent = originalText;
      }, 1500);
    });
  }
});