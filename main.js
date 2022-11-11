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
