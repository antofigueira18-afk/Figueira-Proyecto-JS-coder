let restaurante = prompt("Escribe nombre del restaurante");
alert("Usted esta cenando en: " + restaurante);

let cantidadComensales = parseInt(prompt("¿Cuántos comensales son?"));

let totalCuenta = Number(prompt("¿Cuál es el total de la cuenta?"));

let montoPersona = (totalCuenta/cantidadComensales).toFixed(2);

let resumen = "El total a pagar por persona es de:$" + montoPersona;
alert(resumen);


