function visualizarNotas(){
    // Obtener las claves almacenadas en el LocalStorage
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        const value = localStorage.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        crearNota(key, value);
    });
}

function crearNota(clave, valor){
    // div principal
    var postIt = document.createElement("div");
    postIt.classList.add("post-it");
    console.log(clave.substring(7));
    postIt.id = parseInt(clave.substring(7));

    // div content
    var content = document.createElement("div");
    content.classList.add("post-it-content");

        //textarea
    var textarea = document.createElement("textarea");
    textarea.classList.add("post-it-text");
    textarea.readOnly = true;
    textarea.value = valor;

    content.appendChild(textarea);
        
    // div footer
    var footer = document.createElement("div");
    footer.classList.add("post-it-footer");

        // Botones de editar y delete
    var editButton = document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("boton-edit");
    editButton.addEventListener('click', editar);
    editButton.textContent = "Editar";

    var deleteButton = document.createElement("button");
    deleteButton.addEventListener('click', eliminar);
    deleteButton.classList.add("boton-delete");

    var deleteIcon = document.createElement("i");
    deleteIcon.classList.add("gg-trash");

    deleteButton.appendChild(deleteIcon);

    footer.appendChild(editButton);
    footer.appendChild(deleteButton);
    
    // añadir content y footer al div principal
    postIt.appendChild(content);
    postIt.appendChild(footer);

    // agregar post-it a la estructura general
    var container = document.querySelector(".container");
    container.appendChild(postIt);

    mostrarOcultar();
}