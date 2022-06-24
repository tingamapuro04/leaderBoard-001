const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/b1GI7GiQGpLXMcZYR0Tj/scores';
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

export { Post, url };
