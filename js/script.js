/*
Lógica de editar los textarea
*/
window.addEventListener('DOMContentLoaded', (event) => {
    const editButtons = document.querySelectorAll('.boton-edit');
    const postItTexts = document.querySelectorAll('.post-it-text');
  
    editButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const postItText = postItTexts[index];
        postItText.readOnly = !postItText.readOnly;
  
        if (postItText.readOnly) {
          button.textContent = 'Editar';
        } else {
          button.textContent = 'Guardar';
        }
      });
    });
  });