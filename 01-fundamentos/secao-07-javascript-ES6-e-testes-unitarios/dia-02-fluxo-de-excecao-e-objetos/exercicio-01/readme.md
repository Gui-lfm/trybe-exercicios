# 🚀 Exercício - Criando fluxo de exceção

- A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs;

- Ao clicar o botão, a função sum é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o Number(), pois ele chega à função em forma de string, existem outras formas de converter uma string em um número, como o `parseInt()` e o `parseFloat();`

- Ao final, a função sum imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

- Crie erros personalizados.
- Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
- Utilize o throw new Error e o bloco try/catch.
- Evite funções que tenham muitas responsabilidades distintas.
- Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.
- Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan().
- Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
- Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

Dica: Cuidado ao utilizar o isNaN pois valores considerados falsy são transformados em 0, podendo assim gerar um falso positivo. E lembre-se que, no javascript para se separar a parte inteira da decimal de um número, você deve utilizar o .Exemplo: 1.5 com ponto, ao invés de 1,5 com vírgula.
