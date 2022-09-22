let chessPiece = 'Torre';


switch (chessPiece.toLowerCase()) {
    case 'bispo':
        console.log('bispo -> diagonais')
        break;
    case 'torre':
        console.log('torre -> horizontal e vertical')
        break;
    case 'cavalo':
        console.log('cavalo -> movimento em L')
        break;
    case 'rainha':
        console.log('rainha -> vertical, horizontal e diagonal')
        break;
    case 'rei':
        console.log('rei -> qualquer quadrado adjacente')
        break;
    case 'peão':
        console.log('peão -> somente p/ frente')
        break;
    default:
        console.log('peça inválida, digite uma peça de xadrez existente.')
        break;
}