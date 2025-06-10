const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxContent = document.getElementById('lightboxContent');
        const closeButton = document.getElementById('closeButton');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const fullSrc = item.getAttribute('data-full-src');
                const type = item.getAttribute('data-type');

                if (type === 'image') {
                    lightboxContent.innerHTML = `<img src="${fullSrc}" alt="Image en grand">`;
                }
                lightbox.style.display = 'flex';
            });
        });

        closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
            lightboxContent.innerHTML = '';
        });