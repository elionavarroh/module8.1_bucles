const pacientes = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1 -> Extraer la lista de paciente que están asignados a la especialidad de Pediatría.
const obtenPacientesAsignadosAPediatria = (pacientes) => {
  const pacientesPediatra = [];
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    if (paciente.especialidad === "Pediatra") {
      pacientesPediatra.push(paciente);
    };
  };
  return pacientesPediatra;
};

//Apartado 1.2 -> Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes) => {
  const pacientesPediatra = [];
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      pacientesPediatra.push(paciente);
    };
  };
  return pacientesPediatra;
};

//Apartado 2 -> Activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes) => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = paciente[i];
    if (paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39) {
      activarProctolo = true;
      break;
    };
  };
  return activarProctolo;
};

//Apartado 3 -> El pediatra no puede atender hoy a los pacientes, así que hay que reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes) => {
  const pacientesModificados = pacientes;
  for (let i = 0; i < pacientesModificados.length; i++) {
    const paciente = pacientesModificados[i];
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    };
  };
  return pacientesModificados;
};

//Apartado 4 -> Saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría.
const HayPacientesDePediatria = (pacientes) => {
  let hayPacientesPediatra = false;
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    if (paciente.especialidad === "Pediatra") {
      hayPacientesPediatra = true;
      break;
    };
  };
  return hayPacientesPediatra;
};

//Apartado 5 -> Calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología.
const cuentaPacientesPorEspecialidad = (pacientes) => {
  let numMedicoDeFamilia = 0,
    numPediatra = 0,
    numCardiologo = 0;
  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    if (paciente.especialidad === "Medico de familia") {
      numMedicoDeFamilia++; // Esto sería que numMedicoDeFamilia = numMedicoDeFamilia + 1;
    } else if (paciente.especialidad === "Pediatra") {
      numPediatra++;  // Esto sería que numPediatra = numPediatra + 1;
    } else if (paciente.especialidad === "Cardiólogo") {
      numCardiologo++;  // Esto sería que numCardiologo = numCardiologo + 1;
    } else {
      console.log("Especialidad no reconocida");
    };
  };
  return {
    medicoDeFamilia: numMedicoDeFamilia,
    pediatria: numPediatra,
    cardiologia: numCardiologo,
  };
};