// parte 1
const userData = (name) => {
  const nameFormat = name.toLowerCase().replace(' ', '_');
  const employeeData = { fullName: name, email: `${nameFormat}@trybe.com` };
  return employeeData;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

// parte 2
const checkResult = (bet, lotteryNumber) => {
  let resposta = 'Tente novamente';

  if (bet === lotteryNumber) {
    resposta = 'Parabéns, você ganhou !!!';
    return resposta;
  }
  return resposta;
};

const lottery = (callback, aposta) => {
  const numSorteado = Math.floor(Math.random() * 5) + 1;
  const resultado = callback(aposta, numSorteado);

  return resultado;
};

console.log(lottery(checkResult, 3));

// parte 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; // resultado esperado, 5

function verificaRespostas(gabarito, respostas) {
  let total = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    const resposta = gabarito[i];
    const respostasEstudante = respostas[i];
    if (respostasEstudante === resposta) {
      total += 1;
    } else if (
      respostasEstudante !== resposta &&
      respostasEstudante !== 'N.A'
    ) {
      total -= 0.5;
    }
  }

  return total;
}

const corretorExame = (gabarito, respostasEstudante, callback) => {
  const total = callback(gabarito, respostasEstudante);
  return `O estudante tirou ${total}`;
};

console.log(corretorExame(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaRespostas));