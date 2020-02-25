module.exports = function getSeason( date ) {
  if(!date) return 'Unable to determine the time of year!';
  try {date.getTime()} catch(err) {throw new Error(err)}
  const month = date.getMonth();

  if(month <= 1 || month === 11) return 'winter';
  if(month <= 4) return 'spring';
  if(month <= 7) return 'summer';
  if(month <= 10) return 'autumn';
};
   