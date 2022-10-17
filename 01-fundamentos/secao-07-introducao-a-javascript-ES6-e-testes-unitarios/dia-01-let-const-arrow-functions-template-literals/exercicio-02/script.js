// parte 1
const fatorial = (num) => {
  let resultado = 1;
  for (let i = num; i > 1; i -= 1) {
    resultado *= i;
  }

  return resultado;
};

console.log(`Esse é o fatorial ${fatorial(5)}!`);

//usando recursividade
const fat = (number) => (number === 1 ? 1 : number * fat(number - 1));

console.log(fat(5));

// parte 2
const exemplo = "Antônio foi ao banheiro e não sabemos o que aconteceu";

const longestWord = (string) => {
  const arrayPalavras = string.split(" ");
  let nLetras = 0;
  let maiorPalavra;
  for (const palavra of arrayPalavras) {
    if (palavra.length > nLetras) {
      nLetras = palavra.length;
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
};

console.log(longestWord(exemplo));

// parte 3
const btnCounter = document.getElementById("btn-counter");
const counterText = document.getElementById("num-cliques");

let counter = 0;

btnCounter.addEventListener("click", () => {
  counter += 1;
  counterText.innerText = counter;
});

// parte 4
const substituaX = (nome) => {
  const frase = "Tryber x aqui!";
  const palavras = frase.split(" ");
  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i] === 'x') {
      palavras[i] = nome;
    }
  }
  return palavras.join(" ");
};

const minhasSkills = (func)=>{
  const tryber = func;
  const skills = ['javascript', 'html', 'css'];

  return `  ${tryber}

  Minhas três principais habilidades são:
  
  ${skills}`;
}

console.log(minhasSkills(substituaX('guilherme')));