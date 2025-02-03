function calculateDaysBetweenDates(date1, date2) {
  // Convert the input dates to JavaScript Date objects
  const oneDay = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}


const date1 = new Date('2023-04-01');
const date2 = new Date('2023-04-15');
const daysBetween = calculateDaysBetweenDates(date1, date2);
console.log(`The number of days between ${date1} and ${date2} is ${daysBetween}.`);
# should be 14

