function eliminar(event) {
    var postIt = this.closest(".post-it");
    if (postIt) {
        postIt.remove();
    }
}