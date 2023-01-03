const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kqSOnqGCWpzOPqo0ImuI/scores';
const Post = async (idt, user, score) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idt, user, score }),
  });
  const data = res.json();
  return data;
};

export { Post, url };
