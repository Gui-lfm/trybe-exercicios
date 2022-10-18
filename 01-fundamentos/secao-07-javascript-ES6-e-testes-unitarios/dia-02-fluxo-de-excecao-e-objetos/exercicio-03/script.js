const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function nightShift(obj, newKey, value) {
  obj[newKey] = value;
}

nightShift(lesson2, "turno", "noite");

function listKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}

function objLength(obj) {
  const objKeys = listKeys(obj);

  return objKeys.length;
}

function listValues(obj) {
  const values = Object.keys(obj);
  return values;
}

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

function totalStudents(obj){
  let nTotal = 0;

  for (const key in obj) {
    const nEstudantes = obj[key].numeroEstudantes;
    nTotal += nEstudantes;
  }

  return `total de estudantes: ${nTotal}`
}
