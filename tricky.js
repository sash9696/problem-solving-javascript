let player1 = {
    health: 100,
    getHealth() {
      return this.health;
    },
  };
  
  let getPlayerHealth = player1.getHealth;
  
  let player2 = {
    health: 50,
  };
  
  console.log(getPlayerHealth()); 
  console.log(getPlayerHealth.call(player2)); 

//   // Output: undefined
//   // Output: 50
//   In this version of the code, we have two players (player1 and player2) with a health property and a getHealth method that returns the player's health. We then create a new variable called getPlayerHealth that is set equal to the getHealth method of player1.

// We then call the getPlayerHealth function twice: once without any arguments, and once using the call method to explicitly set the this value to player2.

// The output of this code will be the same as the original code. The first call to getPlayerHealth will return undefined because this defaults to the global object (window in a browser or global in Node.js), which does not have a health property defined. The second call to getPlayerHealth explicitly sets the this value to player2, so this.health inside getHealth refers to player2.health, which is 50.
  






// let hero = {
//     powerLevel:99,
//     getPower(){
//         return this.powerLevel
//     },
// }
// let getPower = hero.getPower

// let hero2 = {powerLevel: 42}
// console.log(getPower())
// console.log(getPower.call(hero2))