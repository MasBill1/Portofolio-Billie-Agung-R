// ==================== Smooth Scrolling ====================
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(`section-${targetId}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== Form Handling via Formspree ====================
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("Thank you for your message! I will get back to you soon.");
        form.reset();
      } else {
        alert("Oops, something went wrong. Please try again.");
      }
    });
  });
});

// ==================== Project Image Hover ====================
document.querySelectorAll('.projects-img img').forEach(img => {
  img.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });
});

// ==================== More Project Button ====================
const moreButton = document.querySelector('.more-btn');
moreButton.addEventListener('click', function () {
  alert('More projects coming soon! Check my GitHub for the latest updates.');
  window.open('https://github.com/MasBill1', '_blank');
});

// ==================== Navbar Toggle for Mobile ====================
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
let isNavOpen = false;

const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<i class="bx bx-menu"></i>';
header.appendChild(hamburger);

hamburger.addEventListener('click', function () {
  isNavOpen = !isNavOpen;
  nav.style.display = isNavOpen ? 'flex' : 'none';
  hamburger.innerHTML = isNavOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    nav.style.display = 'flex';
    isNavOpen = false;
    hamburger.innerHTML = '<i class="bx bx-menu"></i>';
  } else {
    nav.style.display = 'none';
    isNavOpen = false;
  }
});

window.dispatchEvent(new Event('resize'));
