let raceNumber = Math.floor(Math.random() * 1000);
let early= true;
let runnersAge= 18;
if ( runnersAge > 18 && early) {
  raceNumber= raceNumber + 1000
}

if ( runnersAge > 18 && early) {
  console.log('Race time is 9:30 am.' + raceNumber);
} else {
  console.log('Else if runner is over 18 and did not register early they will race at 11:00am. ' + raceNumber);
}

if ( runnersAge < 18 ) {
  console.log('Race time is 12:30pm.' + raceNumber);
} else if (runnersAge === 18) {
  console.log('See the registration desk.');
}