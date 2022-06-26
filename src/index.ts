let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcentajeDePositivos: number = 0;
let num: number = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingrese un número"));
}
if (cantTotal > 0) {
  porcentajeDePositivos = (cantPositivos * 100) / cantTotal;
  console.log(
    cantPositivos,
    "positivos ",
    porcentajeDePositivos,
    " % del total."
  );
}