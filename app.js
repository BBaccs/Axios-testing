axios
	.get('https://swapi.dev/api/')
	.then((res) => {
		const url = res.data.people;
		axios
			.get(url)
			.then((res) => {
				console.log(res.data.results[0])
				for(let person of res.data.results) {
					console.log(`My name is ${person.name}, and my height is ${person.height} cm`)
				}
			})
	})
	.catch((err) => {
		console.log('IN CATCH CALLBACK!');
		console.log(err);
	});










// axios
// 	.get('https://swapi.co/api/planetaslkjdaklsjds/') //BAD URL!
// 	.then((res) => {
// 		//We don't need to check for a 200 status code, because...
// 		//Axios will reject the promise for us, unlike fetch!
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		//In this example with a not-found URL, this callback will run...
// 		console.log('IN CATCH CALLBACK!!00!');
// 		console.log(err);
// 	});

// ********************************
// USING FETCH INSTEAD...
// ********************************
// const checkStatusAndParse = (response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// };

// const printPlanets = (data) => {
// 	console.log('Loaded 10 more planets...');
// 	for (let planet of data.results) {
// 		console.log(planet.name);
// 	}
// 	return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
// 	return fetch(url);
// };

// fetchNextPlanets()
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(checkStatusAndParse)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('SOMETHING WENT WRONG WITH FETCH!');
// 		console.log(err);
// 	});
