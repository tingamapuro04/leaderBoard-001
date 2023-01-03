import { url } from './add';

function remoteAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const overal = data.result;
      let UUser = '';
      overal.forEach((element) => {
        UUser += `
            <ul class="list">
                <li class="list-item">${element.user} : ${element.score}</li>
            </ul>
            `;
      });
      document.querySelector('#userData').innerHTML = UUser;
    });
}

export default remoteAPI;