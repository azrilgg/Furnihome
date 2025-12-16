// AOS Init
AOS.init({
    duration: 900,
    once: true
});



document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".fh-menu-toggle");
  const navLinks   = document.querySelector(".fh-nav-links");
  const navItems   = document.querySelectorAll(".fh-nav-links a");
  const header     = document.querySelector(".fh-header");

  if (!menuToggle || !navLinks) return;

  /* ===============================
     TOGGLE MOBILE MENU
  =============================== */
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Lock scroll when menu open
    document.body.style.overflow = isOpen ? "hidden" : "";

    // Accessibility
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  /* ===============================
     CLOSE MENU WHEN LINK CLICKED
  =============================== */
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  /* ===============================
     CLOSE MENU ON ESC KEY
  =============================== */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  /* ===============================
     AUTO CLOSE ON RESIZE (DESKTOP)
  =============================== */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  /* ===============================
     ACTIVE LINK ON SCROLL
  =============================== */
  const sections = document.querySelectorAll("section[id]");

  function setActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute("id");

      const link = document.querySelector(
        `.fh-nav-links a[href*="${sectionId}"]`
      );

      if (!link) return;

      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        navItems.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

  /* ===============================
     HEADER SHADOW ON SCROLL
  =============================== */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});




// FAQ Accordion
  const faqItems = document.querySelectorAll('.lux-faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.lux-faq-question');
    const answer = item.querySelector('.lux-faq-answer');

    btn.addEventListener('click', () => {
      const openItem = document.querySelector('.lux-faq-item.active');

      if (openItem && openItem !== item) {
        openItem.classList.remove('active');
        openItem.querySelector('.lux-faq-answer').style.maxHeight = null;
      }

      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });


  

  
  


