const aboutSection = document.getElementById('about');
const skillsSection = document.getElementById('skills');
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight - 100;

  // About section animation
  if (aboutSection.getBoundingClientRect().top < triggerPoint) {
    aboutSection.classList.add('show');
  }

  // Skills animation
  if (skillsSection.getBoundingClientRect().top < triggerPoint) {
    skillsSection.classList.add('show');
    skillFills.forEach(fill => {
      const finalWidth = fill.getAttribute('data-width');
      fill.style.width = finalWidth;
    });
  }
});
// Typing animation effect
const roles = ["a Developer.....!", "a Programmer.....!", "a Designer.....!", "a Coder.....!"];
let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingEl = document.querySelector(".typing-text");

function typeEffect() {
  const fullText = roles[roleIndex];
  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  typingEl.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length; // move to next role
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }
}

typeEffect();
// Smooth fade-in animation when scrolling
const sections = document.querySelectorAll("section, .hero, .about, .projects, .contact");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

