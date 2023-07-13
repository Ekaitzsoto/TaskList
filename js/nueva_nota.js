window.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("boton-nuevo");

    boton.addEventListener("click", function (){
        // div principal
        var postIt = document.createElement("div");
        postIt.classList.add("post-it");
        let numPostIts = cuantos();
        postIt.id = numPostIts+1;

        // div content
        var content = document.createElement("div");
        content.classList.add("post-it-content");

            //textarea
        var textarea = document.createElement("textarea");
        textarea.classList.add("post-it-text");
        textarea.readOnly = true;

        content.appendChild(textarea);
        
        // div footer
        var footer = document.createElement("div");
        footer.classList.add("post-it-footer");

            // Botones de editar y delete
        var editButton = document.createElement("button");
        editButton.classList.add("boton-edit");
        editButton.textContent = "Editar";

        var deleteButton = document.createElement("button");
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
        editable();
        eliminable();
    });

    function cuantos(){
        let postIts = document.querySelectorAll(".post-it");
        if(postIts.length > 0){
            return Number.parseInt(postIts[postIts.length-1].id);
        }
        return 0;
    }
});

