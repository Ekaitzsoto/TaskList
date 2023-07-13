/*
Lógica de editar los textarea
*/
window.addEventListener('DOMContentLoaded', function() {
    editable();
});

function editable() {
  const editButtons = document.querySelectorAll('.boton-edit');
  const postItTexts = document.querySelectorAll('.post-it-text');
  
  editButtons.forEach((button, index) => {

    if(!hasListener(button, "click")){
      button.addEventListener('click', () => {
        const postItText = postItTexts[index];
        postItText.readOnly = !postItText.readOnly;
        if (postItText.readOnly) {
          button.textContent = 'Editar';
        } else {
          button.textContent = 'Guardar';
        }
      });

    }
    
  });
}

function hasListener(element, eventName) {
  
  var event = new Event(eventName);
  var eventHandler = 'on' + eventName;
  return typeof element[eventHandler] === 'function' || element.dispatchEvent(event);
}