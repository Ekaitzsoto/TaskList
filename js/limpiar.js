window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#boton-limpiar").addEventListener("click", limpiar);
});

function limpiar() {
    localStorage.clear();
    var postIts = $(".post-it");
    postIts.each(function() {
        $(this).remove();
    });
}