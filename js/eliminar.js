function eliminar() {
    var postIt = this.closest(".post-it");
    console.log(postIt);
    if (postIt) {
        localStorage.removeItem("postIt_"+postIt.id);
        postIt.remove();
    }
}