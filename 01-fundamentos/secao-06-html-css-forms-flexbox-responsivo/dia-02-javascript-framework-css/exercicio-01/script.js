// just validate
const validate = new window.JustValidate('#form');

validate
.addField('#user-name', [
    {
        rule: 'minLength',
        value: 10,
        errorMessage: 'campo precisa de no mínimo 10 caracteres',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'máximo de 40 carecteres permitido',
    },
    {
        rule: 'required',
        errorMessage: 'é necessário preencher esse campo',
    }
])
.addField('#user-email', [
    {
        rule: 'minLength',
        value: 10,
        errorMessage: 'campo precisa de no mínimo 10 caracteres',
    },
    {
        rule: 'email',
        errorMessage: 'digite um formato de e-mail válido',
    },
    {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'máximo de 50 carecteres permitido',
    },
    {
        rule: 'required',
        errorMessage: 'é necessário preencher esse campo',
    }
])
.addField('#user-response', [
    {
        rule: 'required',
        errorMessage: 'é necessário preencher esse campo',
    },
    {
        rule: 'maxLength',
        value: 500,
        errorMessage: 'máximo de 500 carecteres permitido',
    }
])

// validação data

var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/MMM/YYYY',
    minDate: new Date(),
});