// Funzioni per aprire/chiudere lightbox
    function openLightbox(project) {
        const lightbox = document.getElementById(project + 'Lightbox');
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Blocca lo scroll della pagina
    }

    function closeLightbox(project) {
        const lightbox = document.getElementById(project + 'Lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Riabilita lo scroll
    }

    // Chiude cliccando fuori dal contenuto
    window.onclick = function(event) {
        if (event.target.classList.contains('lightbox')) {
            event.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // Chiude con tasto ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const lightboxes = document.querySelectorAll('.lightbox.active');
            lightboxes.forEach(lb => {
                lb.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    });