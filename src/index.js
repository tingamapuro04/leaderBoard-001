/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import { Post } from './modules/add';
import remoteAPI from './modules/remote';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  Post(nameInput.value, scoreInput.value);
  form.reset();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', remoteAPI);

window.addEventListener("DOMContentLoaded", () => {
  remoteAPI()
})
