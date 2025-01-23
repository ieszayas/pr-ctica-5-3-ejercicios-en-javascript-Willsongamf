let boton_borrar = document.getElementById("boton_borrar");
let toast = document.getElementById("Toast");
var finalizar_toast = false;
var mins_toast = 0;
var segundo_toast = 0;
try{
    let boton_toast = document.getElementById("boton_toast");
    boton_toast.addEventListener("click",quitaToast,false);
}catch(error){
 console.error(error);
}

boton_borrar.addEventListener("click", borrarCampos, false);



function quitaToast(){
    finalizar_toast = true;
}
function borrarCampos() {
 
    toast.innerHTML = '  <div class="toast-header">'
    + '<svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>'
    + '<strong class="me-auto">Reinicio</strong>'
    + '<small>' + mins_toast+' mins ago</small>'
    + '<button id ="boton_toast" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>'
   + '</div>'
   +'<div class="toast-body">'
   + ' Todos los campos han sido borrados'
   +'</div>';

    
   
   
   
    console.log("asdasd");
}