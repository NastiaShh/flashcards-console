const fs = require('fs');
const { resolve } = require('path');
class Model {
  // Сначала приложение находится на стартовой странице выбора темы.
  // Подумай, какие ещё страницы будут в твоём приложении?
  #page = 'choose-topic';

  #previousAnswer;

  #question;

  #score = 0;

  // Подумай какие данные будут нужны View, чтобы рендерить эти страницы.
  // Исходя из этих данных определись какие поля будет содержать модель.

  getPage() {
    return this.#page;
  }

  getPreviousAnswer() {
    return this.#previousAnswer;
  }

  getQuestion() {
    return this.#question;
  }

  getScore() {
    return this.#score;
  }

  setQuestion(newDataArr, index) {
    this.#question = newDataArr[index].question;
  }
  
  setAnswer(newDataArr, index) {
    return newDataArr[index].answer;
  }

  chooseTopic() {
    this.#page = 'choose-topic';
    return (readline == 1) ? 'nighthawk_flashcard_data.txt' : (readline == 2) ? 'otter_flashcard_data.txt' : 'raccoon_flashcard_data.txt';
  }

  

  readFile(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(`${__dirname}/topics/${filename}`, 'utf-8', (error, data) => {
        if (error) reject(error);
        else resolve(data);
      });
    });
  }

  splitFile(filename) {
    return readFile(filename)
      .then((data) => {
        const dataArr = data.split('\n').filter((el) => el !== '');
        const newDataArr = [];
        for (let i = 0; i < dataArr.length; i += 2) {
          newDataArr.push({ question: dataArr[i], answer: dataArr[i + 1] });
        }
        return newDataArr;
      });
  }
    makeQuestionArr() {

  }
}

module.exports = Model;


