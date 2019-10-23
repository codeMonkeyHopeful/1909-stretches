// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, die) {
    if (sides > 0 && die > 0) {
      this.sides = sides;
      this.die = die;
      this.history = [];
    } else {
      throw new Error('no good');
    }
  }
  roll() {
    for (let i = 0; i < this.die; i++) {
      let roll = Math.floor(Math.random() * this.sides);
      this.history.push(roll);
      return roll;
    }
  }
}

module.exports = { DiceRoller };
