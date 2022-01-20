"use strict";

const readline = require("readline");

const fn = process.argv[2];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let description, cmd1, ans1;

const question1 = () => {
  return new Promise((resolve) => {
    rl.question("Function description? ", (answer) => {
      description = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    rl.question("Command1?", (answer) => {
      cmd1 = answer;
      resolve();
    });
  });
};

const question3 = () => {
  return new Promise((resolve) => {
    rl.question("Answer1?", (answer) => {
      ans1 = answer;
      resolve();
    });
  });
};

const main = async () => {
  await question1();
  await question2();
  await question3();
  rl.close();
  console.log(`
    function ${fn}(){
      log("----------------------------------------------------------------");
      log("_.${fn}");
      log(\`${description}\`);
      log("${cmd1}");
      log(${cmd1}, ${ans1});
    }
  `);
};

main();
