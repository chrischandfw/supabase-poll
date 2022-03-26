import { redirectPolls, signUp } from './fetch-utils.js';

const signUpForm = document.querySelector('#sign-up');
const signInForm = document.querySelector('#sign-in');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const data = new FormData(signUpForm);

    const email = data.get('email');

    const password = data.get('password');
    await signUp(email, password);
	
    redirectPolls();

});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const data = new FormData(signInForm);

    const email = data.get('email');

    const password = data.get('password');
    //await signUp(email, password);
	
    redirectPolls();

});


