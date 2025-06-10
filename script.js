// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Commentaires
const form = document.getElementById('commentForm');
const list = document.getElementById('commentList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
        list.prepend(comment);

        form.reset();
    }
});
