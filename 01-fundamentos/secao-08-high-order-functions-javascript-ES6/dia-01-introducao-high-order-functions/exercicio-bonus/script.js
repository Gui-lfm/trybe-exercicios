function setDragonDamage(str) {
  const minDmg = 15;
  const maxDmg = str;
  return Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
}

function setWarriorDamage(str, weaponDmg) {
  const minDmg = str;
  const maxDmg = str * weaponDmg;
  return Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
}

function setMageDamage(int, mana) {
  const minDmg = int;
  const maxDmg = int * 2;
  let damage = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);

  const mageMana = mana;
  const manaPerAtk = 15;

  const roundResult = {
    manaSpent: manaPerAtk,
    totalDmg: damage,
  };

  if (mageMana < 15) {
    roundResult.totalDmg = 'mana insuficiente';
    roundResult.manaSpent = 0;
  }

  return roundResult;
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

// parte 2
const battleMembers = { warrior, mage, dragon };

const dragonRound = (callback) => {
  const ataque = callback(dragon.strength);
  dragon.damage = ataque;

  const hpWarrior = warrior.healthPoints;
  const hpMage = mage.healthPoints;

  warrior.healthPoints = hpWarrior - ataque;
  mage.healthPoints = hpMage - ataque;
};

const gameActions = {
  warriorRound: (setWarriorDamage) => {
    const ataque = setWarriorDamage(warrior.strength, warrior.weaponDmg);
    warrior.damage = ataque;

    const hpDragao = dragon.healthPoints;
    dragon.healthPoints = hpDragao - warrior.damage;
  },
  mageRound: (setMageDamage) => {
    const ataque = setMageDamage(mage.intelligence, mage.mana);
    mage.damage = ataque.totalDmg;
    mage.mana -= ataque.manaSpent;

    const hpDragao = dragon.healthPoints;
    dragon.healthPoints = hpDragao - warrior.damage;
  },
  dragonRound: (setDragonDamage) => {
    const ataque = setDragonDamage(dragon.strength);
    dragon.damage = ataque;

    const hpWarrior = warrior.healthPoints;
    const hpMage = mage.healthPoints;

    warrior.healthPoints = hpWarrior - ataque;
    mage.healthPoints = hpMage - ataque;
  },
  roundEnd: () => battleMembers,
};

console.log(gameActions.roundEnd());