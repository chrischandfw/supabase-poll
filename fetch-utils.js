const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indra3ViZGVpanZybnRkbXVucWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1MTcsImV4cCI6MTk2MzEyOTUxN30.qE-NCGctQQqftyEJnJ49hNdOGf4jDNo61YYMlpDAr2g';

const SUPABASE_URL = 'https://wkkubdeijvrntdmunqer.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

//we need 2 async functions to create poll and get poll

export async function createPoll() {
    const response = await client
        .from('poll_farm')
        .insert({ 
			//snake cases match supabase table (sql data)
            question: 'someValue', 
            option_1: 'someValue', 
            option_2: 'someValue',
            votes_1: 0,
            votes_2: 0, 
        });
    return response.body;
}


export async function getPolls() {
    const response = await client
        .from('poll_farm')
        .select('*');

    return response.body;
}