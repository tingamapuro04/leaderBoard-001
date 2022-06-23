import _ from 'lodash';
import './style.css';
import User from './modules/add';
import { addToArray } from './modules/add';


const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/b1GI7GiQGpLXMcZYR0Tj/scores'

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const form = document.querySelector('#form');
const submit = document.querySelector('#submitBtn');


const Post = async (user, score) => {
  const myObject = { user, score };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(myObject),
  });
  const data = res.json();
  console.log(data);
};



form.addEventListener('submit', async (e) => {
  e.preventDefault();
  Post(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});

submit.addEventListener('click', () => {
  addToArray(nameInput.value, scoreInput.value)
})

