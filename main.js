const botonEnviar = document.getElementById('enviar');
const inputNombres = document.getElementById('nombres');
const inputFechaHora = document.getElementById('fechaHora');
const contenedorCitas = document.getElementById('citas');

let citas = [];

botonEnviar.addEventListener('click', () => {
  const nombres = inputNombres.value;
  const fechaHora = inputFechaHora.value;

  if (nombres && fechaHora) {
    const cita = { nombres, fechaHora };
    citas.push(cita);
    actualizarHorario();
    guardarCitasEnLocalStorage();
    inputNombres.value = '';
    inputFechaHora.value = '';
  }
});

function actualizarHorario() {
  contenedorCitas.innerHTML = '<h2>Horario de Citas</h2>';
  if (citas.length === 0) {
    contenedorCitas.innerHTML += '<p>No hay citas programadas</p>';
  } else {
    citas.forEach((cita, index) => {
      const { nombres, fechaHora } = cita;
      contenedorCitas.innerHTML += `
        <div class="cita">
          <p>${nombres} - ${fechaHora}</p>
          <button onclick="cancelarCita(${index})">Cancelar</button>
        </div>`;
    });
  }
}

function cancelarCita(index) {
  citas.splice(index, 1);
  actualizarHorario();
  guardarCitasEnLocalStorage();
}

function guardarCitasEnLocalStorage() {
  localStorage.setItem('citas', JSON.stringify(citas));
}

function cargarCitasDesdeLocalStorage() {
  const citasAlmacenadas = localStorage.getItem('citas');
  if (citasAlmacenadas) {
    citas = JSON.parse(citasAlmacenadas);
  }
}

cargarCitasDesdeLocalStorage();
actualizarHorario();