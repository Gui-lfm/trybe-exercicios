const custoProduto = 30;
const vendaProduto = 50;

const custoTotal = custoProduto + (custoProduto * 0.2)
console.log(`custo total do produto: R$ ${custoTotal}`); 

const lucro = vendaProduto - custoTotal;

if (custoProduto >= 0 && vendaProduto >= 0){
    console.log(`lucro gerado após a venda de mil unidades: R$ ${lucro * 1000}`);
}else{
    console.log('erro, valores inseridos são inválidos')
}