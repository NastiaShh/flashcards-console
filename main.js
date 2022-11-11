const fs = require('fs');
const readlineSync = require('readline-sync');

function getFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/topics/${filename}`, 'utf-8', (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

function splitFile(filename) {
  return getFile(filename)
    .then((data) => {
      const dataArr = data.split('\n').filter((el) => el !== '');
      const newDataArr = [];
      for (let i = 0; i < dataArr.length; i += 2) {
        newDataArr.push({ question: dataArr[i], answer: dataArr[i + 1] });
      }
      return newDataArr;
    });
}

function getQuestion(newDataArr, index) {
  return newDataArr[index].question;
}

function getAnswer(newDataArr, index) {
  return newDataArr[index].answer;
}

console.log('\x1b[33mДобро пожаловать!\n');

const topics = ['1. Ястребы 🦅', '2. Выдры 🦦', '3. Еноты 🦝'];
console.log('\x1b[37m' + topics.join('\n'));
const readline = readlineSync.question('\x1b[34mВыберите номер темы: ');
let score = 0;
async function Question(readline) {
  const fileName = (readline == 1) ? 'nighthawk_flashcard_data.txt' : (readline == 2) ? 'otter_flashcard_data.txt' : 'raccoon_flashcard_data.txt';

  const questionArr = await splitFile(fileName);
  for (let i = 0; i < questionArr.length; i += 1) {
    console.log('\x1b[37m' + getQuestion(questionArr, i));
    const answer = readlineSync.question('> ');
    if (answer.toLowerCase() === getAnswer(questionArr, i)) {
      console.log('\n\x1b[32mВерно! 👍\n');
      score += 1;
    } else {
      console.log(`\n\x1b[31mНеверно! 😥\n\x1b[32mПравильный ответ:\n${getAnswer(questionArr, i)}\n`);
    }
  }

  console.log(`\x1b[36mИтог: ${score * 10} баллов`);
}

Question(readline);
