const text = " I AM SORRY BABY ❤️ ";
const RED = "\x1b[91m";
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";

let textIndex = 0;

console.log("\n");

for (let y = 1.3; y >= -1.2; y -= 0.06) {
  let line = "";
  for (let x = -1.3; x <= 1.3; x += 0.03) {
    const a = x * x + y * y - 1;
    if (a * a * a - x * x * y * y * y <= 0.0) {
      line += text[textIndex % text.length];
      textIndex++;
    } else {
      line += " ";
    }
  }
  if (line.trim().length > 0) {
    console.log(BOLD + RED + line + RESET);
  }
}

console.log("\n");