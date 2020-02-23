
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  if(typeof sample != 'string') return false;
  let n = Number.parseFloat(sample);
  if( isNaN(n)  || n <= 0 || n > 15) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/ n)/k;

  return Math.ceil(t);
};