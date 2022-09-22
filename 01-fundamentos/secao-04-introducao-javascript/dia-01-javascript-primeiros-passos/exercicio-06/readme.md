# Exercícios - agora, a prática

- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
  - Adição (a + b)

  - Subtração (a - b)

  - Multiplicação (a * b)

  - Divisão (a / b)

  - Módulo (a % b)

- Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

- Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

- Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

- 🚀 Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
  - Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

  - Um ângulo será considerado inválido se não tiver um valor positivo.

- Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

  - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

  - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

  - Exemplo: bishop (bispo) -> diagonals (diagonais)

- Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
  - Porcentagem >= 90 -> A

  - Porcentagem >= 80 -> B

  - Porcentagem >= 70 -> C

  - Porcentagem >= 60 -> D

  - Porcentagem >= 50 -> E

  - Porcentagem < 50 -> F

  - O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

## Há um par entre nós

- Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
  - Bonus: use somente um if.

- Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
  - Bonus: use somente um if.

- Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
  - Atente que, sobre o custo do produto, incide um imposto de 20%.

  - Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

  - O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

    - valorCustoTotal = valorCusto + impostoSobreOCusto;
    - lucro = valorVenda - valorCustoTotal (lucro de um produto);
