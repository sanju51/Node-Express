const figlet = require("figlet");

// Make huj return a Promise
const huj = (name) => {
  return new Promise((resolve, reject) => {
    figlet(name, function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        reject(err);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
};

// Sequential printing inside async function
const runSequence = async () => {
  await huj("Sanjana");
  await new Promise(r => setTimeout(r, 500)); // small pause
  await huj("Loves");
  await new Promise(r => setTimeout(r, 500));
  await huj("Avinash");
};

// Run this every 5 seconds
setInterval(() => {
  runSequence();
}, 5000);
