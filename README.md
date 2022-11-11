# Flashcards

## Введение

Вам предстоит создать приложение для флэш-карт, которое должно работать как показано на Рисунке 1. Сначала вы напишете его так как считаете нужным. Постарайтесь оставить не менее двух часов для того чтобы успеть отрефакторить свой код. Как именно его нужно будет отрефакторить описано в релизе 2.

![flashcards animation](readme-assets/flash-cards.gif)

_Рисунок 1_. Пример реализации флэш-карты.

## Releases

### Pre-release: описание и проектирование приложения

Давайте договоримся о том, как вы будете выстраивать ваше приложение. Как выглядит игра с колодой флэш-карт – от момента загрузки данных в файл до проверки того, верна ли ваша догадка? Что должно происходить? Приложение должно работать так, как было показано на Рисунке 1, но не обязательно должно быть его точной копией: например, можно дать пользователям не одну, а несколько попыток на отгадывание карточки.

Когда у вас сформируется четкое понимание того, что должно происходить, то можно приступать к разработке приложения. Нарисуйте черновой вариант объектов, которые собираетесь использовать, их взаимодействие между собой, а также общий ход программы.

Этот release занимает приблизительно 30 минут. Если вы потратили больше времени и чувствуете, что застряли, то найдите человека, который поможет вам справиться с возникшей проблемой.

### Release 1: Code

Пора кодить! У вас есть папка `topics`, в которой лежат несколько файлов с флеш-карточками (вопросами и ответами). Например, `nighthawk_flashcard_data.txt`. Пользователь должен иметь возможность воспользоваться и работать с любым из этих файлов. Будет здорово если вы создите собственные файлы со своими вопросами.

### Перед вторым релизом

До этого вы структурировали свой код интуитивно. Возоможно вы разделили его на несколько функций, классов или файлов. Теперь давайте отрефакторим (частично перепишем) ваш код так, чтобы следовать [шаблону проектирования][шаблон проектирования википедия], который называется [Model-View-Controller][wikipedia mvc] (MVC). Написанный в таком стиле код проще делить на отдельные модули, читать и изменять. Обычно в нём меньше багов.

Прежде чем начать выполнять второй релиз, изучите [гайд по MVC](гайд по MVC).

### Release 2: Model-View-Controller

Итак, у вас должны быть 3 основных независимых компонента. Изменение одного из этих компонентов не должно ломать другие.

- `Model` - отвечает за структуру хранения данных и методы работы с ними.
- `View` - отвечает за вывод данных на экран и чтение пользовательского ввода. Реагирует на изменения модели.
- `Controller` - слушает события о действиях пользователя от View, решает как должна измениться модель после этих действий.

В `runner.js` должно быть минимум кода! Инициализация контроллера и передача ему необходимых параметров.

_Примечание:_ В проекте уже имеются некоторые заготовки кода в папке `mvc`. Они помогу вам разобраться со связями между model, view и controller.

## Заключение

Подумайте о решениях, которые вы принимали во время выполнения этой задачи. Каковы были результаты от проектирования, следования шаблону проектирования MVC?

[гайд по mvc]: MVC-guide.md
[шаблон проектирования википедия]: http://en.wikipedia.org/wiki/Software_design_pattern
[wikipedia mvc]: https://ru.wikipedia.org/wiki/Model-View-Controller