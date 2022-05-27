// Encontrar el numero Maximo
// leer valores hasta que se introduzca un 0
// El usuario puede introducir valores positivos y negativos.

let conIngresos: boolean = false;
let num: number = Number(prompt("Ingrese un número"));
let maxNum: number = num;
while (num !== 0) {
  conIngresos = true;
  if (num > maxNum) {
    maxNum = num;
  }
   num = Number(prompt("Ingrese un número"));
}
if (conIngresos) {
  console.log("El máximo es ", maxNum);
}
