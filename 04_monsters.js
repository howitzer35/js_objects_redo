(function() {
  'use strict';

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function LivingThing(monsterName, monsterHealth) {
    let name = monsterName;
    let health = monsterHealth;

    this.isAlive = function(){
      return (health > 0)
    }

    this.getName = function(){
      return name;
    }

    this.getHealth = function(){
      return health;
    }

    this.setHealth = function(newHealth){
      health = newHealth
    }
  }

  function Hero(heroName, heroHealth) {
    LivingThing.call(this, heroName, heroHealth)
    this.attack = function(monster){

      let heroDamage = getRandomIntInclusive(0, 10);
      let monsterDamage = getRandomIntInclusive(0, 10);

      monster.setHealth(monster.getHealth() - monsterDamage);

      this.setHealth(this.getHealth() - heroDamage);

      console.log(this.getName() + " took " + heroDamage + "damage.");
      console.log(monster.getName() + " took " + monsterDamage + "damage.");
    }

    this.fight = function(arrayOfMonsters){
      for(let i=0; i < arrayOfMonsters.length; i++) {
        arrayOfMonsters[i].isAlive();
        this.attack(arrayOfMonsters[i]);

        while(arrayOfMonsters[i].isAlive() || this.isAlive()) {
          this.attack(arrayOfMonsters[i]);
        }
      }
    }
  }

    let Rat = new LivingThing("Rat", 5);
    let Goblin = new LivingThing("Goblin", 30);
    let Ogre = new LivingThing("Ogre", 80);

    let monsters = [Rat, Goblin, Ogre]

    let hero = new Hero("Superman", 100);

    console.log("A hero emerges!");
    console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm!");
    console.log("Will they be victorious?");

    hero.fight(monsters);

    if (hero.isAlive()) {
      console.log("The hero, " + hero.getName() + ", prevailed!");
    }
    else {
      console.log(hero.getName() + " was bested by the monsters. We are doomed!");
    }

})();
