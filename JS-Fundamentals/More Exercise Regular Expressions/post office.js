function solve(input) {
  let [firstPart, secontPart, thirdPart] = input.toString().split("|");
  let capitalLettersPattern = /[#$%*&][A-Z]+[#$%*&]/g;
  let asciiPattern = /(?<code>\d+):(?<length>\d{2})/g;
  thirdPart = thirdPart.split(" ");

  let cLettersMatch = firstPart.match(capitalLettersPattern);
  let asciiMatch = asciiPattern.exec(secontPart);
  let letters = [];
  let length = [];

  while (asciiMatch !== null) {
    let code = asciiMatch.groups.code;
    let len = asciiMatch.groups.length;
    letters.push(String.fromCharCode(code));
    length.push(len)
    asciiMatch = asciiPattern.exec(secontPart);
  }
  console.log(letters, length);
    for(let i = 0; i < thirdPart.length; i++) {
        let element = thirdPart[i];
        console.log(element);
    }
}

solve([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
]);
