function solve(words, str) {
  words = words.split(", ");

  for (const word of words) {
    starsStr = "*".repeat(word.length);

    str = str.replace(starsStr, word);
  }

  console.log(str);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
