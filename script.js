// Wait until the website content loads
document.addEventListener('DOMContentLoaded', () => {
    
    // Create the HTML elements for the pop-up lightbox dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-btn">&times;</span>
        <img src="" alt="Enlarged view">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close-btn');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    // Open lightbox when an image is clicked
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox when hitting the 'X' button
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox if clicking anywhere outside the main image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        });
    });
});
                             
