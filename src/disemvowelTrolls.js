function disemvowelTrolls(str = '') {

  const vowels = ['a','e','i','o','u'];

  let result = '';
  for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if (!vowels.includes(letter.toLocaleLowerCase())) result += letter

  }
  return result;

}

module.exports = disemvowelTrolls;




// export class Kata {
//   static disemvowel(str: string): string {
//     return str.replace(/[aeiou]/gi, "");
//   }
// }


 // return str.replace(/[aeiou]/gi, '')

  // vowels = 'aeiou';
  // return str
  //   .split('')
  //   .filter( letter => !vowels.includes(letter.toLowerCase()))
  //   .join('')
