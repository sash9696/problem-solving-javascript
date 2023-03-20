
//promise.all() is a static method

// It takes number of promises as arrays and returns a single promise

//returned promise is fullfilled when all promises are fullfilled including empty
//iterable

//it rejects when any of the promises is rejected with the first rejection error

// to summarize 
// It will return a promise.
// ● The promise will resolve with the result of all the passed
// promises or reject with the error message of the first failed
// promise.
// ● The results are returned in the same order as the promises are in
// the given array

//implementation

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(100);;

// const promise2 = Promise.reject('2 promise rejected');;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'text')
})


const promiseAll = async (arrayOfTasks) => {

    let result = []
    let promisesCompleted = 0
   
    return new Promise((resolve, reject) => {

        for (let index in arrayOfTasks){

            arrayOfTasks[index].then((res) => {
                // console.log(res)

                result[index] = res
                promisesCompleted ++

                if (promisesCompleted == arrayOfTasks.length){
                    resolve(result)
                }
                // console.log(result)
            }).catch((error) => {
                 reject(error)
            })
        }
       

    })

}
//test case
// function task(time) {
//     return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve(time);
//     }, time);
//     });
//     }
//     const taskList = [task(1000), task(5000), task(3000)];
//     //run promise.all
//     promiseAll(taskList)
//     .then(results => {
//     console.log("got results", results)
//     })
//     .catch(console.error);

// console.log(promiseAll([promise1, promise2, promise3]))

// function task(time) {
//     return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     if(time < 3000){
//     reject("Rejected");
//     }else{
//     resolve(time);
//     }
//     }, time);
//     });
//     }
//     const taskList = [task(1000), task(5000), task(3000)];
//     //run promise.all
//     promiseAll(taskList)
//     .then(results => {
//     console.log("got results", results)
//     })
//     .catch(console.error);