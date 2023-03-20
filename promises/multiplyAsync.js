function multiplySumAsync(a, b, c) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (
				typeof a !== "number" ||
				typeof b !== "number" ||
				typeof c !== "number"
			) {
				reject(new Error("Arguments must be numbers."));
			} else {
				resolve(a + b);
			}
		}, 1000);
	})
		.then((sum) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(sum * c);
				}, 1000);
			});
		})
		.then((result) => {
			console.log(`The result is ${result}`);
		})
		.catch((error) => {
			console.error(error);
		});
}

multiplySumAsync(2, 3, 4);
