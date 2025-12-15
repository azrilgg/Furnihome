/* AOS */
AOS.init({
  duration: 1000,
  once: true
});

/* MOBILE MENU */
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

/* VIDEO INTERACTION */
const videos = document.querySelectorAll('.video-card video');

function pauseAll() {
  videos.forEach(v => v.pause());
}

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    pauseAll();
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  video.addEventListener('click', () => {
    if (video.paused) {
      pauseAll();
      video.play();
    } else {
      video.pause();
    }
  });
});
