# Exercício - organizando lições

- Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

- Crie uma função para mostrar o tamanho de um objeto.

- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

```javascript
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```

- Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

```javascript
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
```

- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

```javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```

## 🚀 Bônus - Organizando lições

- Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

- Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

```javascript
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
```
