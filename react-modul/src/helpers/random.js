export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
};

export function randomFlipCoin(balance) {
  if (getRandomInt(0, 1)) {
    return +(balance + (balance / 100) * 5).toFixed(2);
  } else {
    return +(balance - (balance / 100) * 5).toFixed(2);
  }
};
