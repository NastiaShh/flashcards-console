const readlineSync = require('readline-sync');

class View {
  renderSelectTopicPage() {
    // нам пришёл список тем, нужно вывести их на экран
    console.log('\x1b[33mДобро пожаловать!\n');
    const topics = ['1. Ястребы 🦅', '2. Выдры 🦦', '3. Еноты 🦝'];
    console.log('\x1b[37m' + topics.join('\n'));

    const readline = readlineSync.question('\x1b[34mВыберите номер темы: ');

    return readline;
  }

  renderQuestion();
}

module.exports = View;
