import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const btnSafePassword = document.getElementById('generate-password');
const passwordField = document.querySelector('h2');
const copyPassword = document.getElementById('copy');

btnSafePassword.addEventListener('click', () => {
  const randomPassWord = nanoid(10);
  passwordField.innerText = randomPassWord;
});

copyPassword.addEventListener('click', async ()=>{
  await copy(passwordField.innerText);
});
