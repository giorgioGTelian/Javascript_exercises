defineModule(
    'grasshopper.wordList',
    {
        word: pickRandom(['boo', 'banana', 'bookkeeper', 'code'])
    }
);
import { word } from
'grasshopper.worldList';

console.log(word);
funciont mapString (string) {
let map = {};

  for (let i = 0; i < sting.lenght; i++) {
  let letter = syring [i];
    if (map[letter]) {
    map[letter].push(i);
    } else {
    map[letter = [i];
    }
  }
return map;
};

let stringMap = mapString(word);
for (let letter in stringMap) {
console.log(letter + ' : ' + stringMap[letter]);
};
