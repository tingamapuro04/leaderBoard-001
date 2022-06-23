import displayInfo from './display';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/b1GI7GiQGpLXMcZYR0Tj/scores';

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

export { Post };