const sendBtn = document.getElementById('clear-btn');
const checkPictures = document.getElementById('check-pictures')
const userName = document.getElementById('user-name');
const email = document.getElementById('user-email');
const userResponse = document.getElementById('user-response');

sendBtn.addEventListener('click', function(event){
    event.preventDefault();
    if(checkPictures.checked === false){
        alert('Envio de imagens necessário para participar do concurso')
    };

    if(verificaInputs(userName, 10, 50) === false ||verificaInputs(email, 10, 50) === false || verificaInputs(userResponse, 20, 500) === false){
        alert('campo inválido');
    }else{
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})

function verificaInputs(inputText, min, max){ 
    if(inputText.value.length < min || inputText.value.length > max){
        return false;
    }
    return true;

}

