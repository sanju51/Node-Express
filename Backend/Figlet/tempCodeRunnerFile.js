jana");
  await new Promise(r => setTimeout(r, 500)); // small pause
  await huj("Loves");
  await new Promise(r => setTimeout(r, 500));
  await huj("Avinash");
};

// Run this every 5 seconds
setInterval(() => {
  runSequence();
}, 5000);
