// JS 1
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

  document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;

  return false;
}

function validaCampo(valor, campo) {
  if (isNaN(valor)) {
    document.getElementById(campo).style.borderColor = "#E13845";
    document.getElementById(campo + "Help").innerHTML = `La ${campo} debe ser numérica`;
    return 1;
  }

  return 0;
}

function quitaError(campo) {
  document.getElementById(campo).style.borderColor = "#CED4DA";
  document.getElementById(campo + "Help").innerHTML = "";
}

// JS 2
function calculoLetraDni() {
  var numeroDni = document.getElementById("numeroDni").value;
  const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
  var miLetra;

  if (!validarDni(numeroDni, "numeroDni")) {
    return false;
  }

  miLetra = LETRAS.substr(numeroDni % 23, 1);

  document.getElementById("resultado2").innerHTML = `La letra que corresponde al DNI es: ${miLetra} `;

  return false;
}

function validarDni(valor, campo) {
  if (isNaN(parseInt(valor)) || valor != Math.trunc(valor) || valor.length < 7 || valor.length > 8) {
    document.getElementById(campo).style.borderColor = "red";
    document.getElementById(campo + "Help").innerHTML = "El DNI debe ser entero y tener 7 u 8 dígitos";
    return false;
  } else {
    return true;
  }
}

// JS 3 
function checkType(words) {
  words = String(words).trim();
  const regxs = {
    "lower": /^[a-z0-9 ]+$/,
    "upper": /^[A-Z0-9 ]+$/,
    "upperLower": /^[A-Za-z0-9 ]+$/
  }

  if (regxs.lower.test(words)) return 0;
  if (regxs.upper.test(words)) return 1;
  if (regxs.upperLower.test(words)) return 2;
  return -1;
};

function compruebaMayus() {
  var mensaje = document.getElementById("myn").value;
  var result = checkType(mensaje);

  switch (result) {
    case 0:
      document.getElementById("resmyn").innerHTML = 'El texto introducido esta en minúsculas'
      break;
    case 1:
      document.getElementById("resmyn").innerHTML = 'El texto introducido esta en mayúsculas'
      break;
    case 2:
      document.getElementById("resmyn").innerHTML = 'El texto introducido tiene mayúsculas y minúsculas'
      break;
    default:
      document.getElementById("resmyn").innerHTML = 'El texto introducido no contiene letras'
      break;
  }

  return false;
};

// JS 4
function diviRestas() {
  var dividendo = document.getElementById("divi1").value;
  var divisor = document.getElementById("disor1").value;
  var contador = 0;

  dividendo = dividendo - divisor;

  while (dividendo > 0) {
    contador = contador + 1;
    dividendo = dividendo - divisor;
  }

  document.getElementById("resultado4").innerHTML = ("El resultado de la división es: " + dividendo + " , el dividendo se ha restado por el divisor " + contador + " veces");
  return false;
}

// JS 5
function mcd() {
  var a = parseFloat(document.getElementById("js5a").value);
  var b = parseFloat(document.getElementById("js5b").value);
  var mcd;

  var errores = 0; // flag que indica si los datos de entrada son correctos

  errores = validaCampo(a, 'js5a') + validaCampo(b, 'js5b');

  if (errores != 0) {
    return false;
  }

  while (a > 0) {
    mcd = a;
    a = b % a;
    b = mcd;
  }

  document.getElementById("resultado5").innerHTML = `El máximo común divisor es: ${mcd} `;
  return false;

};

// JQUERY 1
$(document).ready(function () {
  // Normal
  $("#oculta").click(function () {
    $("#p1").hide()
  });

  $("#muestra").click(function () {
    $("#p1").show()
  });

  $("#toggle").click(function () {
    $("#p1").toggle()
  });

  // Fade
  $("#ocultaF").click(function () {
    $("#p2").fadeOut()
  });

  $("#muestraF").click(function () {
    $("#p2").fadeIn()
  });

  $("#toggleF").click(function () {
    $("#p2").fadeToggle()
  });

  // Slide
  $("#ocultaS").click(function () {
    $("#p3").slideUp()
  });

  $("#muestraS").click(function () {
    $("#p3").slideDown()
  });

  $("#toggleS").click(function () {
    $("#p3").slideToggle()
  });
});

// JQUERY 2
$(document).ready(function () {
  $("#start").click(function () {
    // cuadro rojo, se desplaza
    $("#fig1").animate({
      left: '40%',
      top: '50%',
      height: '150px',
      width: '150px',
      opacity: 0.5
    }, 3000);
    // círculo amarillo, se desplaza
    $("#fig2").animate({
      right: '30%',
      top: '40%',
      height: '150px',
      width: '150px',
      opacity: 0.5
    }, 3000);
    // rótulo de bienvenida
    $("#animacion p").fadeIn(2000);
  });

  // si se pulsa stop, toda la animación acaba
  $("#stop").click(function () {
    $("#fig1").stop(true, true);
    $("#fig2").stop(true, true);
  });
});

// JQUERY 3
$(document).ready(function(){
  $("#jq3").click(function(){
    $("#resultadoJQ3").css("color", "red").slideUp(2000).slideDown(2000);
    alert("Pulsa ok para que el parrafo desaparezca y aparezca");
  });
});

// JQUERY 5
$(document).ready(function () {
  $("#azul").click(function () {
    // azul
    $("#cuadrado").css({ "background-color": "blue" });
  });

  $("#verde").click(function () {
    // verde
    $("#cuadrado").css({ "background-color": "green" });
  });

  $("#rojo").click(function () {
    // rojo
    $("#cuadrado").css({ "background-color": "red" });
  });

});


