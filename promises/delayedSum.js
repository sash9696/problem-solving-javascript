function delayedSum(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') {
          reject(new Error('Arguments must be numbers.'));
        } else {
          resolve(a + b);
        }
      }, 1000);
    });
  }
  
  delayedSum(2, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
  delayedSum('2', 3)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  