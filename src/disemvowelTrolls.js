function disemvowelTrolls(str = '') {

  // const vowels = ['a','e','i','o','u'];

  // let result = '';
  // for (let i = 0; i < str.length; i++){
  //   for (let j = 0; j < vowels.length; j++){
  //     if(str[i] === vowels[j]){
  //       result = result + str[i];
  //     }
  //   }
  // }

  // return result;

  const vowels = ['a','e','i','o','u'];

  let result = '';
  for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if (!vowels.includes(letter)) result += letter

  }
  return result;
}

module.exports = disemvowelTrolls;
