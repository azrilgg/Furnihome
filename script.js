// AOS Init
AOS.init({
    duration: 900,
    once: true
});

const toggle = document.getElementById("uxToggle");
const nav = document.getElementById("uxNav");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// auto close when link clicked
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    nav.classList.remove("active");
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


  

  
  

