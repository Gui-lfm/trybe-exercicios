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

function createDays() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.querySelector('#days')

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const day = decemberDaysList[i];
        const dayItem = document.createElement('li');
        dayItem.className = 'day';
        dayItem.innerText = day;

        if (dayItem.innerText === '4' || dayItem.innerText === '11' || dayItem.innerText === '18' || dayItem.innerText === '25') {
            dayItem.classList.add('friday')
        }

        if(dayItem.innerText === '24' || dayItem.innerText === '25' || dayItem.innerText === '31'){
            dayItem.classList.add('holiday')
        }

        daysList.appendChild(dayItem);
    }
}

createDays();

// parte 2

function criaBotao(string){
    const btnDiv = document.querySelector('.buttons-container');
    const btnFeriado = document.createElement('button');
    btnFeriado.innerText = string;
    btnFeriado.id = 'btn-holiday';

    btnDiv.appendChild(btnFeriado);

}

criaBotao('Feriados');