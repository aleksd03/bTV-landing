const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("open");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");

  hamburger.setAttribute("aria-expanded", !isOpen);
  mobileMenu.setAttribute("aria-hidden", isOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", false);
    mobileMenu.setAttribute("aria-hidden", true);
  });
});

const animatedElements = document.querySelectorAll(".card, #trust");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(element => {
  observer.observe(element);
});