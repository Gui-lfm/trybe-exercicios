function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

// parte 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays() {
    const daysList = document.querySelector('#days')

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const day = decemberDaysList[i];
        const dayItem = document.createElement('li');
        dayItem.className = 'day';
        dayItem.innerText = day;

        if (dayItem.innerText === '4' || dayItem.innerText === '11' || dayItem.innerText === '18' || dayItem.innerText === '25') {
            dayItem.classList.add('friday')
        }

        if (dayItem.innerText === '24' || dayItem.innerText === '25' || dayItem.innerText === '31') {
            dayItem.classList.add('holiday')
        }

        daysList.appendChild(dayItem);
    }
}

createDays();

// parte 2
const btnDiv = document.querySelector('.buttons-container');

function criaBotao(string, id) {
    const botao = document.createElement('button');
    botao.innerText = string;
    botao.id = id;

    return botao
}

const btnFeriado = criaBotao('Feriado', 'btn-holiday')

btnDiv.appendChild(btnFeriado);

// parte 3

btnFeriado.addEventListener('click', function () {
    const feriado = document.querySelectorAll('.holiday')

    for (let i = 0; i < feriado.length; i += 1) {
        const dia = feriado[i];
        if (dia.style.backgroundColor === 'rgb(47, 193, 140)') {
            dia.style.backgroundColor = 'rgb(238,238,238)'
        } else {
            dia.style.backgroundColor = 'rgb(47, 193, 140)'
        }
    }
})

// parte 4

const btnSexta = criaBotao('Sexta-Feira', 'btn-friday');
btnDiv.appendChild(btnSexta);

// parte 5

btnSexta.addEventListener('click', function(){
    const sexta = document.querySelectorAll('.friday')
    console.log(sexta);
})

// parte 6
function zoomIn(){

}

function zoomOut(){

}

// parte 7
function addTarefa(){

}