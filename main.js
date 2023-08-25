const botonEnviar = document.getElementById('enviar');
const inputNombres = document.getElementById('nombres');
const inputNombreMascota = document.getElementById('nombreMascota');
const inputFechaHora = document.getElementById('fechaHora');
const contenedorCitas = document.getElementById('citas');

let citas = [];

botonEnviar.addEventListener('click', () => {
  const nombres = inputNombres.value;
  const nombreMascota = inputNombreMascota.value;
  const fechaHora = inputFechaHora.value;

  if (nombres && nombreMascota && fechaHora) {
    if (validarHorario(fechaHora)) {
      const cita = { nombres, nombreMascota, fechaHora };
      citas.push(cita);
      actualizarHorario();
      guardarCitasEnLocalStorage();
      inputNombres.value = '';
      inputNombreMascota.value = '';
      inputFechaHora.value = '';
    } else {
      alert('El horario seleccionado no está disponible.');
    }
  }
});

function validarHorario(fechaHora) {
  const fechaSeleccionada = new Date(fechaHora);
  const diaSemana = fechaSeleccionada.getDay();
  const hora = fechaSeleccionada.getHours();
  const minutos = fechaSeleccionada.getMinutes();

  if (diaSemana >= 1 && diaSemana <= 6) { 
    if ((hora >= 9 && hora < 13) || (hora >= 14 && hora < 17 && minutos < 30)) {
      return true;
    }
  }
  return false;
}
function actualizarHorario() {
  contenedorCitas.innerHTML = '<h2>Horario de Citas</h2>';
  if (citas.length === 0) {
    contenedorCitas.innerHTML += '<p>No hay citas programadas</p>';
  } else {
    citas.forEach((cita, index) => {
      const { nombres, nombreMascota, fechaHora } = cita;
      contenedorCitas.innerHTML += `
        <div class="cita">
          <p>${nombres} - ${nombreMascota} - ${fechaHora}</p>
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