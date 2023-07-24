let nombre = prompt("Ingrese su nombre");
let afirmacion;

while (afirmacion !== "no") {
  afirmacion = prompt("Si quiere calcular los metros cuadrados escriba 'si', de lo contrario escriba 'no'.");

  if (afirmacion === "no") {
    alert("Gracias " + nombre + ". Hasta pronto.");
  } else {
    alert(nombre + ", a continuación podrá ingresar los datos para calcular.");

    let ladoA = parseFloat(prompt("Ingresa la distancia del lado A, en mts."));
    let ladoB = parseFloat(prompt("Ingresa la distancia del lado B, en mts"));

    function calcularMetros() {
      let resultado = ladoA * ladoB;
      return resultado;
    }

    let areaCalculada = calcularMetros();
    alert(`El área calculada es de: ${areaCalculada} metros cuadrados.`);
  }
}