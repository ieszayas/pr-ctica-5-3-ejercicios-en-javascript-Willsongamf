let boton_borrar = document.getElementById("boton_borrar");
let toast = document.getElementById("Toast");
let campo_fecha = document.getElementById("Fecha nacimiento");

boton_borrar.addEventListener("click", borrarCampos, false);
campo_fecha.addEventListener("change",eliminarPista(campo_fecha),false);


function eliminarPista(Campo){
    Campo.attributes = ""; 
    console.log("asdasd");
}
function borrarCampos() {
 let segundos = 0;
    toast.innerHTML = '  <div class="toast-header">'
    + '<strong class="me-auto">Borrado Completado</strong>'
    + '<button id ="boton_toast" type="button" class="btn-close" aria-label="Close"></button>'
   + '</div>'
   +'<div class="toast-body">'
   + ' Todos los campos han sido borrados'
   +'</div>';
    try {
        let boton_toast = document.getElementById("boton_toast");
        boton_toast.addEventListener("click",quitarToast,false);
    } catch(error){
        console.log(error);
    }

    setTimeout(() => {
        quitarToast();
    }, 2000);
}

function quitarToast(){
    toast.innerHTML = "";
}