const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введіть слово, або речення: ", function(sentence) {
  if(isSentencePalindrom(sentence))
  {
    console.log(`${sentence} - Паліндром`);
  }
  else
  {
    console.log(`${sentence} - не Паліндром`);
  }
  rl.close();
});

function isSentencePalindrom(sentence)
{
    let cleaned = sentence
    .toLowerCase()
    .replace(/[^a-zа-я0-9]/gi, '');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}