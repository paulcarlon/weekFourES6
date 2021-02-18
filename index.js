function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName('Tim', 'Berners-Lee'));

const entireName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(entireName('Robert', 'Cailliau'));

setTimeout(() => alert('Time is up!'), 3000);

const askAreWeThereYet = () => {
  alert('Are we there yet?');
};
setInterval(askAreWeThereYet, 300000);

const processSplicedValue = (array, index, callback) => {
  const splicedValue = array.splice(index, 1);
  callback(splicedValue);
};

let instrument = ['guitar', 'banjo', 'piano', 'drums'];

processSplicedValue(instrument, 3, console.log);
processSplicedValue(instrument, 2, alert);
processSplicedValue(instrument, 1, (splicedValue) => alert(splicedValue));

const app = document.getElementById('root');

const funTimes = (splicedValue) => {
  app.innerHTML = `
  <h2>In addition to learning to program and build software, I also love playing the ${splicedValue}</h2>
  `;
};

processSplicedValue(instrument, 0, funTimes);
