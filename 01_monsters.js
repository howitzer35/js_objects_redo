(function () {
  'use strict';

  function LivingThing(name, health) {
    this.name = name;
    this.health = health;
  }

    let Rat = new LivingThing("Rat", 5);
    let Goblin = new LivingThing("Goblin", 30);
    let Ogre = new LivingThing("Ogre", 80);

    let monsters = [Rat, Goblin, Ogre]

    console.log("Monsters!");

    console.log("ES6 for...in");
    for (let monster of monsters) {
      console.log(monster.name + ": " + monster.health);
    }

    console.log("===================");

    console.log("for loop for support before ES6");
    for (let i=0; i < monsters.length; i++) {
      console.log(monsters[i].name + ": " + monsters[i].health);
    }

})();
