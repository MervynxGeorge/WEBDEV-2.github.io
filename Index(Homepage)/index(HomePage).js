// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Menu toggle functionality
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
  
    menu.addEventListener("click", () => {
      // Toggle menu styles
      menu.classList.toggle("change");
      navbar.classList.toggle("change");
  
      // Apply rotation effect to sections
      sections.forEach((section) => {
        section.classList.toggle("change");
      });
    });
  
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll(".navbar-link");
  
    navbarLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  
          // Close the menu if open (for smaller screens)
          menu.classList.remove("change");
          navbar.classList.remove("change");
          sections.forEach((section) => section.classList.remove("change"));
        }
      });
    });
  
    // Contact form validation
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const messageInput = form.querySelector("textarea");
  
      if (!nameInput.value.trim()) {
        alert("Please enter your full name.");
        return;
      }
  
      if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!messageInput.value.trim()) {
        alert("Please enter your message.");
        return;
      }
  
      alert("Thank you for contacting us! We will get back to you shortly.");
      form.reset(); // Clear the form
    });
  
    // Email validation helper function
    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    // Auto-play and pause videos on hover
    const videos = document.querySelectorAll(".video");
  
    videos.forEach((video) => {
      video.addEventListener("mouseenter", () => video.play());
      video.addEventListener("mouseleave", () => video.pause());
    });
  });
  