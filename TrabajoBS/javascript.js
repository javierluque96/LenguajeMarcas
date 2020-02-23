/* Comprueba que las dos contraseñas sean iguales */
function comprobarClave(){
  clave1 = document.f1.clave1.value
  clave2 = document.f1.clave2.value

  if (clave1 != clave2)
     alert("Las dos claves son distintas...\nVuelve a rellenar los datos")
}