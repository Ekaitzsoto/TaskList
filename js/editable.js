/*
Lógica de editar los textarea
*/
function editar(event){
  postIt = this.closest(".post-it");
  postItText = postIt.querySelector(".post-it-text");
  button = this;
  postItText.readOnly = !postItText.readOnly;
  if (postItText.readOnly) {
    button.textContent = 'Editar';
  } else {
    button.textContent = 'Guardar';
  }
}