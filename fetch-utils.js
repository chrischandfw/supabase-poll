/* eslint-disable no-console */
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indra3ViZGVpanZybnRkbXVucWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1MTcsImV4cCI6MTk2MzEyOTUxN30.qE-NCGctQQqftyEJnJ49hNdOGf4jDNo61YYMlpDAr2g';

const SUPABASE_URL = 'https://wkkubdeijvrntdmunqer.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//we need 2 async functions to create poll and get poll

export async function createPoll(i) {
    const response = await client
        .from('poll_farm')
        .insert(i);

    return response.body;
}


export async function getPolls() {
    const response = await client
        .from('poll_farm')
        .select('*');
    console.log(response);
    return response.body;
}

export async function getUser() {
    return client.auth.user();
}

export function checkLoggedIn() {
    if (!client.auth.session()) {
        window.location = '../';
    }
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

export async function signUp(realEmail, realPassword) {

    //console.log('before sign up', client.auth.user());

    const response = await client.auth.signUp({
        email: realEmail,
        password: realPassword,
    });

    //console.log('after sign up', client.auth.user());

    return response.user;
}

export async function redirectPolls() {
    if (await getUser()) {
        window.location.href = './polls';
    }
} 

/*const { user, session, error } = await supabase.auth.signUp({
	email: 'example@email.com',
	password: 'example-password',
  })*/