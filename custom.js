const form = document.querySelector('.custom-form');
const success = document.getElementById('successBox');

form.addEventListener('submit', e => {
  e.preventDefault();
  success.classList.add('active');
  form.reset();
});
