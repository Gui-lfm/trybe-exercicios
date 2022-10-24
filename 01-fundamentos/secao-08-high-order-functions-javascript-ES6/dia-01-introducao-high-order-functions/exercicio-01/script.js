const wakeUp = () => console.log('Acordando!!');

const coffeeBreak = () => console.log('Bora tomar café!!');

const gNight = () => console.log('Partiu dormir!!');

function doingThings(callback) {
  return callback();
}

doingThings(wakeUp);
doingThings(coffeeBreak);
doingThings(gNight);
