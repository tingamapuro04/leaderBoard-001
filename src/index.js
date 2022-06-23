import _ from 'lodash';
import './style.css';
import User from './modules/add';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/b1GI7GiQGpLXMcZYR0Tj/scores';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const form = document.querySelector('#form');
const submit = document.querySelector('#submitBtn');

const Post = async (user, score) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = res.json();
  return data;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  Post(nameInput.value, scoreInput.value);
  form.reset();
});

/* const getData = async () => {
  const res = await fetch(url)
  const data = res.json()
  const row = document.createElement('tr')
  return data
}

console.log(getData()) */

function remoteAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const overal = data.result;
      let UUser = '';
      overal.forEach((element) => {
        UUser += `
            <ul>
                <li>${element.user} : ${element.score}</li>
            </ul>
            `;
      });
      document.querySelector('#userData').innerHTML = UUser;
    });
}
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', remoteAPI);

window.addEventListener('load', (e)=> {
  e.stopPropagation()
})