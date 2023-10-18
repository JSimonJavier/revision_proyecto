//login

const inputs = //document input
const button = //document login

button.addEventListener("click", (e)=> {
  e.preventDefault() // previnir la accion predeterminado de enviar un formulario
  signIn()
})

function signIn(){
  //recorrer inputs for loop -> dos if
    //-> 1ro: el largo del valor del imput es igual 0 -> sweet de alet de que fayo -> VA A MOSTRASR UN MENSAJE DE ERROR SI ALGUN CAMPO ESTA VACIO
    //-> 2do: largo del valor es mayor a 0 y menor a 6 -> tu respueta es muy corta -> AGREGAR CLASES Y MUESTRA UN MENSAJE DE ERROR SI LA RESPUESTA ES DEMASIADA CORTA
}

/*FOR LOOP DONDE VAMOS A AGREGARLE EVENTOS DE ENTRADA A LSO CAMPOS INPUT -> INPUTS[I].addEventeLister("input", e => {
  if -> si el target del valor es mayor o igual a 6 -> BORRAR EL MENSAJE DE ERROR SI LA RESPUESTA ES LO SUFICIEMENTE LARGA
})
*/
