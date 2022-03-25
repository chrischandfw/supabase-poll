const currentPollContainer = document.querySelector('.current-poll-container');
const publishButton = document.querySelector('.publish-button');
const pollFarmEl = document.querySelector('.poll-farm-list');
const formEl = document.querySelector('form');


let question = '';
let option1 = '';
let option2 = '';
let vote1 = '';
let vote2 = '';

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    data.get('question');
    data.get('option-1');
    data.get('option-2');
	
});