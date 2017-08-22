(function () {
  'use strict';

  function LivingThing(name, health) {
    this.name = name;
    this.health = health;

    this.isAlive = function(){
      return this.health > 0
    }
  }

  let Rat = new LivingThing("Rat", 5);
  let Goblin = new LivingThing("Goblin", 30);
  let Ogre = new LivingThing("Ogre", 80);

  let monsters = [Rat, Goblin, Ogre]

  console.log("Are the monsters alive?");
  console.log("ES6 for...in");
  for (let monster of monsters) {
    console.log(monster.name + " is " + (monster.isAlive() ? "alive" : "dead"));
  }

  console.log("===================");

  console.log("for loop for support before ES6");
  for (let i=0; i < monsters.length; i++) {
    console.log(monsters[i].name + " is " + (monsters[i].isAlive() ? "alive" : "dead"));
  }

})();
