import { createPoll, getPolls, logout, checkLoggedIn } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

checkLoggedIn();

//const currentPollContainer = document.querySelector('.current-poll-container');
const publishButton = document.querySelector('.publish-button');
const pollFarmEl = document.querySelector('.poll-farm-list');

const formEl = document.querySelector('form');
const currentQuestEl = document.querySelector('.current-question');
const currentOp1El = document.querySelector('.option-one');
const currentOp2El = document.querySelector('.option-two');

const addOption1Button = document.querySelector('.add-option-one');
const subtractOption1Button = document.querySelector('.subtract-option-one');
const addOption2Button = document.querySelector('.add-option-two');
const subtractOption2Button = document.querySelector('.subtract-option-two');
const logoutButtonEl = document.querySelector('#logout'); 

let currentQuestion = 'Default Question';
let option1 = 'Default Option 1';
let option2 = 'Default Option 2';
let vote1 = 0;
let vote2 = 0;

window.addEventListener('load', async () => {
    await fetchAndDisplayPolls();
});

logoutButtonEl.addEventListener('click', async () => {
    await logout();
});

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    currentQuestion = data.get('question');
    option1 = data.get('option-1');
    option2 = data.get('option-2');
    vote1 = data.get('option1-votes');
    vote2 = data.get('option2-votes');

    displayCurrentQuestion();
	
    formEl.reset();

});
publishButton.addEventListener('click', () => {
    const farmPoll = {
        question: currentQuestion, 
        option_1: option1, 
        option_2: option2,
        votes_1: vote1,
        votes_2: vote2, 
    };

    createPoll(farmPoll);

    currentQuestion = '';
    option1 = '';
    option2 = '';
    vote1 = 0;
    vote2 = 0;

    fetchAndDisplayPolls();
	
});


addOption1Button.addEventListener('click', () => {
    vote1++;
    currentOp1El.textContent = `${option1} (${vote1})`;

});

addOption2Button.addEventListener('click', () => {
    vote2++;
    currentOp2El.textContent = `${option2} (${vote2})`;
});

subtractOption1Button.addEventListener('click', () => {
    vote1--;
    currentOp1El.textContent = `${option1} (${vote1})`;
});

subtractOption2Button.addEventListener('click', () => {
    vote2--;
    currentOp2El.textContent = `${option2} (${vote2})`;
});


function displayCurrentQuestion() {
    //currentPollContainer.textContent = 
    currentQuestEl.textContent = currentQuestion;
    currentOp1El.textContent = option1;
    currentOp2El.textContent = option2;
}

//for every async function, there is await
async function fetchAndDisplayPolls() {
    const polls = await getPolls();


    pollFarmEl.textContent = '';
    for (let poll of polls) {
        const newPoll = renderPoll(poll);

        pollFarmEl.append(newPoll);
    }
}
