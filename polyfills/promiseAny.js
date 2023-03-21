//takes iterable of promises as input and returns a single promise
//returned promises fullfilled if any of the input's promise fulfills,
//with the first fullfillment value

//it rejects when all of the input promises rejected (including empty array when passed)

//In simple terms Promise.any() is just opposite of Promise.all().
// Function takes an array of promises as input and returns a new
// promise.
// ● The returned promise is resolved as soon as any of the input
// promises resolves.
// ● Else if all of the input promises are rejected then the returned
// promise is rejected with the array of all the input promises
// reasons
// const promise1 = Promise.reject('error');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "slow"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 200, "slower"));

// const promises = [promise1, promise2, promise3];

//test cases

// const test1 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 500, 'one');
//     });
//     const test2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 600, 'two');
//     });
//     const test3 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 200, 'three');
//     });

//test case 2
const test1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, 'one');
    });
    const test2 = new Promise(function (resolve, reject) {
    setTimeout(reject, 600, 'two');
    });
    const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 200, 'three');
    });
const promises = [test1,test2,test3]

async function promiseAny(tasklist) {
	let rejectedResult = [];
	let promiseRejectedCount = 0;

	return new Promise((resolve, reject) => {
		tasklist.forEach((task, index) => {
			task.then((res) => {
				resolve(res);
			}).catch((error) => {
				rejectedResult[index] = error;
				promiseRejectedCount++;

				if (promiseRejectedCount == tasklist.length) {
					reject(rejectedResult);
				}
			});
		});
	});
}

promiseAny(promises).then(res => console.log(res))
