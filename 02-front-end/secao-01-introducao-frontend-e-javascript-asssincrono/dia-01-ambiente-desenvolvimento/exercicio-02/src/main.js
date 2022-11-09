import './style.css';
import validator from 'validator';

// variaveis globais:
const form = document.querySelector('form');
const selectValidation = document.getElementById('validation');
const btnValidation = document.getElementById('validate-text');
const textToValidate = document.getElementById('input-field');
const validationResult = document.createElement('span');

btnValidation.addEventListener('click', (event) => {
  event.preventDefault();
  const validation = selectValidation.value;
  let isValidated;
  switch (validation) {
  case 'numero-int':
    isValidated = validator.isNumeric(textToValidate.value);
    break;
  case 'maiuscula':
    isValidated = validator.isUppercase(textToValidate.value);
    break;
  case 'alfanumerico':
    isValidated = validator.isAlphanumeric(textToValidate.value);
    break;
  case 'vazio':
    isValidated = validator.isEmpty(textToValidate.value);
    break;
  default:
    isValidated = validator.isEmail(textToValidate.value);
    break;
  }
  if (isValidated) {
    validationResult.innerHTML = 'Validação realizada com sucesso';
  } else {
    validationResult.innerHTML = 'Validação inválida';
  }
  form.appendChild(validationResult);
});
