document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const video = document.querySelector(".carousel-video");
    const thumbnails = document.querySelectorAll(".thumbnail");

    let currentIndex = 0;

    // Crear flechas dentro del contenedor del video principal
    const leftArrow = document.createElement("div");
    leftArrow.innerHTML = "&#9664;"; // Flecha izquierda
    leftArrow.classList.add("arrow", "left-arrow");

    const rightArrow = document.createElement("div");
    rightArrow.innerHTML = "&#9654;"; // Flecha derecha
    rightArrow.classList.add("arrow", "right-arrow");

    // Insertar flechas en el contenedor del video principal
    carousel.appendChild(leftArrow);
    carousel.appendChild(rightArrow);

    // Mostrar flechas al pasar el cursor sobre el video
    carousel.addEventListener("mouseenter", () => {
        leftArrow.style.opacity = "1";
        rightArrow.style.opacity = "1";
    });

    // Ocultar flechas al salir del cursor
    carousel.addEventListener("mouseleave", () => {
        leftArrow.style.opacity = "0";
        rightArrow.style.opacity = "0";
    });

    // Función para cambiar el video
    function changeVideo(index) {
        if (index >= 0 && index < thumbnails.length) {
            currentIndex = index;
            video.querySelector("source").src = thumbnails[currentIndex].querySelector("source").src;
            video.load();
            video.play();
        }
    }

    // Event listeners para las flechas
    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            changeVideo(currentIndex - 1);
        }
    });

    rightArrow.addEventListener("click", () => {
        if (currentIndex < thumbnails.length - 1) {
            changeVideo(currentIndex + 1);
        }
    });

    // Event listener para los thumbnails (cambia el video al hacer clic en una miniatura)
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
            changeVideo(index);
        });
    });
}); 