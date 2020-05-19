// Ejercicio 3-v2
function areaTriangulo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area;
  var errores = 0; // flag que indica si los datos de entrada son correctos

  errores = validaCampo(base, 'base') + validaCampo(altura, 'altura');

  if (errores != 0) {
    return false;
  }
  
  area = base * altura / 2;
  
  document.getElementById("resultado").innerHTML="El área del triángulo es: " + area;
  

  // Para que no recarge la página y podamos ver el área
  return false;
}

function validaCampo(valor, campo) {
  if (isNaN(valor)) {
    document.getElementById(campo).style.borderColor="#E13845";
    document.getElementById(campo + "Help").innerHTML=`La ${campo} debe ser numérica`;
    return 1;
  }

  return 0;
}

function quitaError(campo) {
  document.getElementById(campo).style.borderColor="#CED4DA";
  document.getElementById(campo + "Help").innerHTML="";
}

// Ejercicio 5-v2
function calculoLetraDni(){    
  var numeroDni=document.getElementById("numeroDni").value;
  const LETRAS="TRWAGMYFPDXBNJZSQVHLCKE"; 
  var miLetra;         
  

  // VAMOS A VALIDAR QUE EL DNI ES UN NÚMERO ENTERO Y TIENE 7 U 8 DÍGITOS
  if (! validarDni(numeroDni,"numeroDni")) {
    return false;
  }   
  
  // calculo interno de la letra del DNI
  miLetra = LETRAS.substr(numeroDni % 23, 1);

  document.getElementById("resultado3").innerHTML=`La letra que corresponde al DNI es: ${miLetra} `;

  return false; 
}

function validarDni(valor,campo){
  if (isNaN(parseInt(valor))||valor!=Math.trunc(valor)||valor.length<7||valor.length>8){
      document.getElementById(campo).style.borderColor="red";
      document.getElementById(campo+"Help").innerHTML="El DNI debe ser entero y tener 7 u 8 dígitos";
      return false;
  } else {
      return true;
  }
}