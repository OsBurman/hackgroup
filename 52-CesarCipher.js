// Given a non-empty string consisting of lowercase letters and a key (a non-negative integer) that specifies how many places in the alphabet to shift each letter in the string, our mission is to write a function that returns the encoded string.

const caesarCipher = (string, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = string.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }

    let index = alphabet.indexOf(letter) + number % 26;
    if (index > 25) index -= 26;
    if (index < 0) index += 26;

    output +=
      string[i] === string[i].toUpperCase()
        ? alphabet[index].toUpperCase()
        : alphabet[index];
  }

  return output;
};
