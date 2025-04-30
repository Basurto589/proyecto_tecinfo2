document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
            img.style.boxShadow = "0 4px 12px rgba(231, 84, 128, 0.6)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });

        img.addEventListener("click", () => {
            alert("Has hecho clic en una imagen de la galería.");
        });
    });
});
