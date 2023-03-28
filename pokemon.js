
// SEQUENTIAL REQUESTS
async function get3Pokemon() {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}
get3Pokemon().catch((e) => {
    console.log(e);
})











// PARALELL REQUESTS

// Poke2 & poke3 do not depend on poke1
// So we don't need to wait for it, so we can instead go in parralell and send
// Them all at the same time (instead of sending one, waiting for it to come back, sending another waiting...etc)
async function get3Pokemon() {
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');

    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
}
get3Pokemon().catch((e) => {
    console.log(e);
})