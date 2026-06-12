function mostrar(id) {
    const secciones = document.querySelectorAll("section");

    secciones.forEach(sec => {
        sec.classList.remove("activo");
    });

    document.getElementById(id).classList.add("activo");
}