(function () {
  'use strict';

  function LivingThing(monsterName, monsterHealth) {
    var name = monsterName;
    var health = monsterHealth

    this.isAlive = function(){
      return (health > 0);
    }

    this.getName = function(){
      return name;
    }

    this.getHealth = function(){
      return health;
    }
  }

  let Rat = new LivingThing("Rat", 5);
  let Goblin = new LivingThing("Goblin", 30);
  let Ogre = new LivingThing("Ogre", 80);

  let monsters = [Rat, Goblin, Ogre]

  console.log("Monsters!");
  console.log("ES6 for...in");
  for (let monster of monsters) {
    console.log(monster.getName() + ": " + monster.getHealth());
  }

  console.log("===================");

  console.log("for loop for support before ES6");
  for (let i=0; i < monsters.length; i++) {
    console.log(monsters[i].getName() + ": " + monsters[i].getHealth());
  }

})();
