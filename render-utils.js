export function renderPoll(poll) {
    const newPollEl = document.createElement('div');
    const newQuestionEl = document.createElement('p');
    const newOpOneEl = document.createElement('p');
    const newOpTwoEl = document.createElement('p');
    const newVotesOneEl = document.createElement('p');
    const newVotesTwoEl = document.createElement('p');

    newPollEl.classList.add('poll');
	//the right side of . is supabase table.
    newQuestionEl.textContent = poll.question;
    newOpOneEl.textContent = poll.option_1;
    newOpTwoEl.textContent = poll.option_2;
    newVotesOneEl.textContent = poll.votes_1;
    newVotesTwoEl.textContent = poll.votes_2;
    
    newPollEl.append(
        newQuestionEl,
        newOpOneEl,
        newVotesOneEl,
        newOpTwoEl,
        newVotesTwoEl,);
    
    return newPollEl;
}