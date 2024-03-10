const images = [
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/001.jpg?raw=true',
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/002.jpg?raw=true',
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/003.jpg?raw=true',
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/004.jpg?raw=true',
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/005.jpg?raw=true',
  'https://github.com/SebastianAdamoszek/Curriculum-Vitae/blob/main/src/img/gallery/006.jpg?raw=true',
];

document.addEventListener('DOMContentLoaded', function () {
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const imageElement = document.getElementById('image');
  const modalOpenElements = document.querySelectorAll('[data-modal-open]');

  function openModal() {
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.backdrop');

    modal.classList.add('is-visible');
    backdrop.classList.add('is-visible');
    showCurrentImage();
    window.addEventListener('keydown', escapeKeyHandler);
    backdrop.addEventListener('click', backdropClickHandler);
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
  }
  modalOpenElements.forEach(element => {
    element.addEventListener('click', openModal);
  });

  function closeModal() {
    modal.classList.remove('is-visible');
    backdrop.classList.remove('is-visible');
    window.removeEventListener('keydown', escapeKeyHandler);
    backdrop.removeEventListener('click', backdropClickHandler);
    prevButton.removeEventListener('click', prevImage);
    nextButton.removeEventListener('click', nextImage);
  }

  function escapeKeyHandler(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  function backdropClickHandler(event) {
    if (event.target.classList.contains('backdrop')) {
      closeModal();
    }
  }

  function showCurrentImage() {
    imageElement.src = images[currentIndex];
  }

  function animateImage() {
    const imgAnimation = document.getElementById('image');

    imgAnimation.style.transition = 'transform .5s ease-in-out';
    imgAnimation.style.transform = 'scale(0.01, 0.98)';
    setTimeout(() => {
      imgAnimation.style.transition = 'transform .5s ease-in-out';
      imgAnimation.style.transform = 'scaleX(1)';
    }, 500);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    animateImage();
    setTimeout(() => {
      showCurrentImage();
    }, 500);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    animateImage();
    setTimeout(() => {
      showCurrentImage();
    }, 500);
  }
  let currentIndex = 0;
});
