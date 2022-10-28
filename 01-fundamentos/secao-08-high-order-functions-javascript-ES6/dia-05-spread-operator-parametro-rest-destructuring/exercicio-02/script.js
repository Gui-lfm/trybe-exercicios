const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const createObject = (
  { name, age, nationality },
  { profession, squad, squadInitials }
) => {
  const obj = {
    nome: name,
    idade: age,
    nacionalidade: nationality,
    profissao: profession,
    time: squad,
    sigla: squadInitials,
  };

  return obj;
};
console.log(createObject(user, jobInfos));

function phrase({ nome, idade, nacionalidade, profissao, time, sigla }) {
  return `Hi, my name is ${nome}, I'm ${idade} years old and I'm ${nacionalidade}. I work as a ${profissao} and my squad is ${sigla}-${time}`;
}

const test = createObject(user, jobInfos);

console.log(phrase(test));
