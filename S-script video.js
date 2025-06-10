document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const videoSrc = item.getAttribute('data-video-src');
                const lightbox = document.getElementById('lightbox');
                const lightboxContent = document.getElementById('lightboxContent');

                lightboxContent.innerHTML = `
                    <video controls autoplay style="width: 100%; max-height: 80vh;">
                        <source src="${videoSrc}" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                `;
                lightbox.style.display = 'flex';
            });
        });

        document.getElementById('closeButton').addEventListener('click', () => {
            const lightbox = document.getElementById('lightbox');
            const lightboxContent = document.getElementById('lightboxContent');
            lightbox.style.display = 'none';
            lightboxContent.innerHTML = '';
        });