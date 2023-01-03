import { url } from './add';

function remoteAPI() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const mobutu = data.result;
      const overal = mobutu;
      let UUser = '';
      overal.forEach((element) => {
        UUser += `
            <tr>
              <th>${element.user}</th>
              <th>${element.score}</th>
            </tr>
            `;
      });
      document.querySelector('.tbody').innerHTML = UUser;
    });
}

export default remoteAPI;