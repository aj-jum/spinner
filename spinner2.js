const spinnerChars = ['|', '/', '-', '\\'];
let delay = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200; 
}

// Add a newline after the animation completes
setTimeout(() => {
  console.log();
}, delay + 100); // Adjust the delay to ensure it executes after the last character

