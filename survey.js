const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const vProfile = `${answer0} loves listening to ${answer1} while ${answer2}, 
// devouring ${answer3} for ${answer4}, prefers ${answer5} over any other sport, 
// and is amazing at ${answer6}. `

const aQuestion = [
"What's your name? Nicknames are also acceptable :) ", 
"What's an activity you like doing? ",
"What do you listen to while doing that? ", 
"Which meal is your favourite (eg: dinner, brunch, etc.) ",
"What's your favourite thing to eat for that meal? ",
"Which sport is your absolute favourite? ",
"What is your superpower? In a few words, tell us what you are amazing at! "]

let vRet = ""

for(let i = 0; i < aQuestion.length; i++){
  console.log(i+1, aQuestion[i] );
}

rl.question(aQuestion[0], (answer0) => {
  rl.question(aQuestion[1], (answer1) => {
    rl.question(aQuestion[2], (answer2) => {
      rl.question(aQuestion[3], (answer3) => {
        rl.question(aQuestion[4], (answer4) => {
          rl.question(aQuestion[5], (answer5) => {
            rl.question(aQuestion[6], (answer6) => {
              console.log(`\n${answer0} loves listening to ${answer2} while ${answer1}, `
              + `devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, ` 
              + `and is amazing at ${answer6}.\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});