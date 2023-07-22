function eliminar() {
    var postIt = this.closest(".post-it");
    if (postIt) {
        localStorage.removeItem("postIt_"+postIt.id);
        postIt.remove();
    }
}