let n = 5;
for (let i = n; i >= 1; i--) {
  let line = "";
  for (let s = 1; s <= n - i; s++) {
    line += " ";
  }
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}
