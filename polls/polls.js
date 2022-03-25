const currentPollContainer = document.querySelector('.current-poll-container');
const publishButton = document.querySelector('.publish-button');
const pollFarmEl = document.querySelector('.poll-farm-list');
const formEl = document.querySelector('form');
const currentQuestEl = document.querySelector('.current-question');
const currentOp1El = document.querySelector('.option-one');
const currentOp2El = document.querySelector('.option-two');

let currentQuestion = '';
let option1 = '';
let option2 = '';
let vote1 = '';
let vote2 = '';

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    currentQuestion = data.get('question');
    option1 = data.get('option-1');
    option2 = data.get('option-2');

    currentQuestEl.textContent = currentQuestion;
    currentOp1El.textContent = option1;
    currentOp2El.textContent = option2;
	
    formEl.reset();

});