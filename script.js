// AOS Init
AOS.init({
    duration: 900,
    once: true
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


  

  
  

