const count = Number.parseInt(process.argv[2] ?? "10", 10);

if (!Number.isInteger(count) || count < 0) {
  console.error("0以上の整数を指定してください。例: node fibonacci.js 10");
  process.exit(1);
}

const fibonacci = [];

for (let i = 0; i < count; i += 1) {
  if (i === 0) {
    fibonacci.push(0);
  } else if (i === 1) {
    fibonacci.push(1);
  } else {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
}

console.log(fibonacci.join(" "));
