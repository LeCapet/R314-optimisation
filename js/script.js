(function(){
    window.addEventListener('load', function(){
        const imgs = document.querySelectorAll('.card img');
        imgs.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', ()=> img.classList.add('loaded'));
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const params = new URLSearchParams(window.location.search);
        const imageId = params.get('id');

        if (!imageId || isNaN(parseInt(imageId))) {
            const imageTitle = document.getElementById('image-title');
            if (imageTitle) {
                imageTitle.textContent = "Erreur : ID d'image manquant.";
            }
            return; 
        }

        const imageFileName = `img${imageId}.jpg`;
        const imagePath = `img/${imageFileName}`;
        const imageDisplay = document.getElementById('image-display');
        const imageTitle = document.getElementById('image-title');

        if (imageDisplay) {
            imageDisplay.src = imagePath;
            imageDisplay.alt = `Image ${imageId}`;
            
            imageDisplay.addEventListener('load', () => {
                imageDisplay.classList.add('loaded');
            });
            
            imageDisplay.addEventListener('error', () => {
                imageDisplay.alt = `Erreur de chargement de l'image ${imageId}`;
                if (imageTitle) {
                    imageTitle.textContent = `Erreur : Image ${imageId} introuvable`;
                }
            });
            
            if (imageDisplay.complete) {
                imageDisplay.classList.add('loaded');
            }
        }

        if (imageTitle) {
            imageTitle.textContent = `Image ${imageId} du Projet Héritage des cendres`;
        }
    });
})();