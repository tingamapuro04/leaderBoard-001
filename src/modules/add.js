const myArray = [];

export default class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const addToArray = (name, score) => {
  const userScore = new User(name, score);
  myArray.push(userScore);
  localStorage.setItem('userScores', JSON.stringify(myArray));
};

export { addToArray, myArray };
