let mouse = 8;
let teclado = 3;
let auriculares = 0;
let monitor = 5;
let webcam = 4;

let consulta = true;
let stock;

while (consulta === true) {
  let producto = prompt("Ingrese el nombre del producto que desea consultar",).toLowerCase();
  if (producto === "mouse") {
    stock = mouse;
  } else if (producto === "teclado") {
    stock = teclado;
  } else if (producto === "auriculares") {
    stock = auriculares;
  } else if (producto === "monitor") {
    stock = monitor;
  } else if (producto === "webcam") {
    stock = webcam;
  } else {
    stock = -1;
    console.log("Producto no encontrado");
  }

  if (stock >= 6) {
    console.log("Producto con stock suficiente");
  } else if (stock > 0) {
    console.log("Producto con stock limitado");
  } else {
    console.log("Producto sin stock");
  }

  let continuar = prompt(
    "¿Desea consultar otro producto? SI / NO",).toLowerCase();

  if (continuar === "no") {
    consulta = false;
    console.log("Nos vemos la próxima");
  }
}
