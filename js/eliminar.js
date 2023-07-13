/*
Lógica de editar los textarea
*/

window.addEventListener('click', function() {
    eliminable();
});

function eliminable() {
    
    var deleteButtons = document.querySelectorAll(".boton-delete");

    // Recorrer todos los botones de borrado y agregar un evento de clic a cada uno
    deleteButtons.forEach(function(button) {
        button.addEventListener("click", function() {

            var postIt = this.closest(".post-it");
            
            if (postIt) {
                postIt.remove();
            }
        });
    });
}