document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbMainImg = document.getElementById('lbMainImg');
  const lbThumbs = document.getElementById('lbThumbs');
  const lbCounter = document.getElementById('lbCounter');
  const closeButton = document.getElementById('closeButton');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  let currentGalleryImages = [];
  let currentIndex = 0;

  function openLightbox(images, index) {
    currentGalleryImages = images;
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  function updateLightboxContent() {
    if (currentGalleryImages.length === 0) return;

    lbMainImg.src = currentGalleryImages[currentIndex].fullSrc;
    lbMainImg.alt = currentGalleryImages[currentIndex].alt;
    lbCounter.textContent = `${currentIndex + 1} / ${currentGalleryImages.length}`;

    lbThumbs.innerHTML = '';
    currentGalleryImages.forEach((image, index) => {
      const thumb = document.createElement('img');
      thumb.src = image.src;
      thumb.alt = image.alt;
      thumb.classList.add('thumbnail');
      if (index === currentIndex) {
        thumb.classList.add('active');
      }
      thumb.addEventListener('click', () => {
        currentIndex = index;
        updateLightboxContent();
      });
      lbThumbs.appendChild(thumb);
    });
  }

  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = currentGalleryImages.length - 1;
    } else if (currentIndex >= currentGalleryImages.length) {
      currentIndex = 0;
    }
    updateLightboxContent();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const galleryGrid = item.closest('.gallery-grid');
      const imagesInGrid = Array.from(galleryGrid.querySelectorAll('.gallery-item')).map(gItem => ({
        src: gItem.querySelector('img').src,
        fullSrc: gItem.dataset.fullSrc,
        alt: gItem.querySelector('img').alt
      }));
      const clickedIndex = Array.from(galleryGrid.children).indexOf(item);
      openLightbox(imagesInGrid, clickedIndex);
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navigate(-1));
  lbNext.addEventListener('click', () => navigate(1));

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigate(-1);
      } else if (e.key === 'ArrowRight') {
        navigate(1);
      }
    }
  });
});
