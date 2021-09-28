const raining = true;
const cold = false;
const temperature = 32;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} 

if (temperature < 0) {
  console.log ("make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("short sleeves won't cut it!");
} else {
  console.log("short sleeves are fine.");
}

console.log("Now you're ready to go outside!");