

//takes iterable of promises as input and returns a single promise
//the returned promise settles with eventual state of the first promise that settles

// const promise1 = new Promise((resolve) => setTimeout(resolve,100,'first'))
// const promise2 = new Promise((resolve) => setTimeout(resolve,200,'second'))
// const promise3 = new Promise((resolve) => setTimeout(resolve,300,'third'))

// const promises = [promise1,promise1,promise3]

//test case 1
// const test1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 500, 'one');
//     });
//     const test2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'two');
//     });
//     const test3 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 200, 'three');
//     });
//test case 2
const test1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'one');
    });
    const test2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'two');
    });
    const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 40, 'three');
    });
const promises = [test1,test2,test3]


async function promiseRace(promises){

    return new Promise((resolve,reject) => {
        for (let promise of promises){
            promise
                .then((result) => resolve(result))
                .catch(error => reject(error))
        }
    })
}

promiseRace(promises)
.then((res) => console.log(res))
.catch((res) => console.log(res))