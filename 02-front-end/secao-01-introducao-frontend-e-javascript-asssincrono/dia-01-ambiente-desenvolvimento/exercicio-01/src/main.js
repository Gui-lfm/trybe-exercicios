import { nanoid } from 'nanoid';
import './style.css';

const btnSafePassword = document.querySelector('button');
const passwordField = document.querySelector('h2');

btnSafePassword.addEventListener('click', () => {
  const randomPassWord = nanoid(10);
  passwordField.innerText = randomPassWord;
});
