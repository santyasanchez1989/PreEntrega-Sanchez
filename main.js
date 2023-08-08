const lado1Input = document.getElementById('lado1');
const lado2Input = document.getElementById('lado2');
const calcularSuperficieButton = document.getElementById('calcularSuperficie');
const resultadoOutput = document.getElementById('resultado');
const historialList = document.getElementById('historial');

const superficiesArray = [];


function calcularSuperficieRectangulo(lado1, lado2) {
  const superficie = lado1 * lado2;
  return superficie;
}

calcularSuperficieButton.addEventListener('click', function () {
  const lado1 = parseFloat(lado1Input.value);
  const lado2 = parseFloat(lado2Input.value);

  if (isNaN(lado1) || isNaN(lado2)) {
      resultadoOutput.textContent = "Por favor, ingresa valores numéricos válidos para ambos lados.";
  } else {
      const superficieRectangulo = calcularSuperficieRectangulo(lado1, lado2);
      resultadoOutput.textContent = `La superficie del rectángulo es: ${superficieRectangulo.toFixed(2)} mts2`;
      
      superficiesArray.push(superficieRectangulo);
      actualizarHistorial();
  }
});

function actualizarHistorial() {
  historialList.innerHTML = '';
  for (const superficie of superficiesArray) {
      const listItem = document.createElement('li');
      listItem.textContent = `Superficie en mts2: ${superficie.toFixed(2)}`;
      historialList.appendChild(listItem);
  }
}