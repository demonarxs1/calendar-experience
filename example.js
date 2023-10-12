const minusesFor = new Set([4, 5, 13, 14, 15, 16, 17, 19, 20, 21, 26]);
const questions = [
  'Я ерзаю во время представлений и лекций',
  'Я неусидчив (-а) в театре или на лекции',
  'Я невнимательный (-ая)',
  'Я легко сосредотачиваюсь',
  'Я мыслю последовательно',
  'Я импульсивен (-на), действую, поддавшись порыву',
  'Я действую под влиянием момента',
  'Я импульсивен (-на) в покупках',
  'В мыслях я быстро перескакиваю с предмета на предмет',
  'Я сначала действую, потом думаю',
  'Я трачу или прошу больше, чем зарабатываю',
  'Я беззаботный (-ая), ветреный (-ая)',
  'Я внимательно обдумываю всё',
  'Я тщательно планирую задачи',
  'Я контролирую себя',
  'Я планирую поездки задолго до их начала',
  'Я думаю о том, что сделать, чтобы не потерять работу',
  'Я говорю, не подумав',
  'Мне нравится обдумывать сложные проблемы',
  'Мне нравятся закадки (ребусы)',
  'Я регулярно откладываю (коплю)',
  'Меня более интересует настоящее, нежели будущее',
  'Я скучаю при решении задач, требующих обдумывания',
  'Я меняю места жительства',
  'Я меняю работу',
  'Я ориентирован (-на) на будущее',
  'Я могу думать лишь об одной проблеме одновременно',
  'Когда я думаю, у меня возникают посторонние мысли',
  'Я быстро определяюсь в своем мнении',
  'Я меняю свои хобби',
];

const answers = [
  'редко или никогда',
  'иногда',
  'часто',
  'всегда или почти всегда'
]

class BarratTest extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const questionEls = questions.map((it, index) => {
      const questionNumber = index + 1;
      const question = document.createElement('div');
      question.classList.add('barrat-question');

      const boldQuestion = document.createElement('b');
      boldQuestion.innerHTML = questionNumber + '. ' + it + ':';

      question.append(boldQuestion)


      const answerBlock = answers.map((it, i) => {
        const id = `id:${index}-${i}`;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = questionNumber.toString();
        radio.value = (i + 1).toString();
        radio.id = id;

        const answer = document.createElement('label');
        answer.innerHTML = it;
        answer.htmlFor = id;
        answer.style.userSelect = 'none';

        const answerBlock = document.createElement('div');

        answerBlock.append(radio);
        answerBlock.append(answer);

        return answerBlock;
      })

      question.append(...answerBlock);

      return question;
    });

    const button = document.createElement("button");
    button.textContent = 'Получить результат';

    const result = document.createElement("div");
    button.addEventListener('click', () => this.getResults(result))

    const style = document.createElement("style");

    style.textContent = `
    .barrat-question {
      margin-bottom: 16px;
    }
    `;

    shadow.appendChild(style);
    shadow.append(...questionEls);
    shadow.appendChild(button);
    shadow.appendChild(result);
  }

  getResults(resultEl) {
    const results = questions.map((it, index) => {
      const result = this.shadowRoot.querySelector(`input[name="${(index+1).toString()}"]:checked`)?.value;
      return parseInt(result, 10);
    }).reduce((acc, cur, index) => {
      const number = index + 1;
      acc += minusesFor.has(number) ? -1 * cur : cur;
      return acc;
    }, 0);

    const finalResult = results + 55;

    resultEl.innerHTML = 'Ваш результат:' + finalResult.toString();
  }
}

customElements.define("barrat-test", BarratTest);
