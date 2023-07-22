/*
Lógica de editar los textarea
*/
function editar(event){
  postIt = this.closest(".post-it");
  postItText = postIt.querySelector(".post-it-text");
  button = this;
  postItText.readOnly = !postItText.readOnly;
  if (postItText.readOnly) {
    console.log(postItText);
    localStorage.setItem("postIt_"+postIt.id, postItText.value);
    button.textContent = 'Editar';
  } else {
    button.textContent = 'Guardar';
  }
}