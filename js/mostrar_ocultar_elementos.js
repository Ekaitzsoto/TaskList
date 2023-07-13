/*
Este script muestra y oculta los botones y el placeholder de cada post-it / nota
*/
window.addEventListener("DOMContentLoaded", function() {
  mostrarOcultar();
});

function mostrarOcultar(){
  var postIts = document.querySelectorAll(".post-it");

  postIts.forEach(function(postIt) {
    
    var buttons = postIt.querySelector(".post-it-footer");
    var textarea = postIt.querySelector(".post-it-text");
    
    postIt.addEventListener("mouseover", function() {
      buttons.style.display = "flex";
      textarea.setAttribute("placeholder", "Escribe aqui...");
    });

    postIt.addEventListener("mouseout", function() {
      buttons.style.display = "none";
      textarea.removeAttribute("placeholder");
    });
  });
};