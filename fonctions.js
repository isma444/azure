const animatedElement = document.getElementById('animatedElement');

        // Fonction pour animer l'élément en dessinant un huit
        function animateEight() {
            let angle = 0;

            // Fonction d'animation
            function move() {
                const radius = 500; // Rayon du cercle
                const centerX = window.innerWidth / 2; // Centre de l'écran
                const centerY = window.innerHeight / 2;

                // Calculez les nouvelles positions x et y pour dessiner un huit
                const x = centerX + Math.sin(angle) * radius;
                const y = centerY + Math.sin(angle * 2) * radius / 2;

                animatedElement.style.left = x + 'px';
                animatedElement.style.top = y + 'px';

                // Augmentez l'angle pour suivre le mouvement du cercle
                angle += 0.02; // Ajustez la valeur pour changer la vitesse

                // Demandez à la fonction move de s'exécuter à nouveau
                requestAnimationFrame(move);
            }

            // Démarrez l'animation
            move();
        }

        const clickCountElement = document.getElementById('clickCount');

// Initialisation du compteur
let clickCount = 0;

// Ajoutez un gestionnaire d'événement au clic sur l'élément
animatedElement.addEventListener('click', () => {
    changeColor(); // Appel à la fonction changeColor
    incrementClickCount(); // Incrémentation du compteur
});

// Fonction pour changer la couleur de l'élément
function changeColor() {
    // Générez une couleur aléatoire au format hexadécimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Appliquez la couleur à l'élément
    animatedElement.style.backgroundColor = randomColor;
}

// Fonction pour incrémenter le compteur et afficher le résultat
function incrementClickCount() {
    clickCount++; // Incrémentation du compteur
    clickCountElement.textContent = `Clics : ${clickCount}`; // Mise à jour du texte avec le nouveau compteur
}
        
        animatedElement.addEventListener('click', changeColor);

        // Fonction pour changer la couleur de l'élément
        function changeColor() {
            // Générez une couleur aléatoire au format hexadécimal
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
            // Appliquez la couleur à l'élément
            animatedElement.style.backgroundColor = randomColor;
        }
        // Appelez la fonction d'animation lors du chargement de la page
        window.onload = animateEight;