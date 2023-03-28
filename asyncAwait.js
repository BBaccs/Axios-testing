// axios
// .get('https://swapi.dev/api/films/')
// .then((res) => {
//     const film = res.data.results;
//     for (let i = 0; i < film.length; i++) {
//         const aFilm = film[i];
//         for (let key in aFilm) {
//             // console.log(film, film[0], key);
//             console.log(`${key}: ${aFilm[key]}`);
//           }
//     }
// })
// .catch((err) => {
//     console.log(err);
// });

async function getFilms() {
    const res = await axios.get('https://swapi.dev/api/films/')
    console.log(res, res.data.results[0].title);
}

// Catch error handling
getFilms().catch((err) => {
    console.log(err);
});



// Try catch error handling
// async function getFilms() {
//     try {
//         const res = await axios.get('https://swapi.dev/api/films/')
//         console.log(res, res.data.results[0].title);
//     }
//     catch (e) {
//         console.log('in catch', e);
//     }
// }

// getFilms();