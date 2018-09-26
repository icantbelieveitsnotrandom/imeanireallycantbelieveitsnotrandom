function shuffler(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

function weighted(randomObj) {

  let { array, index, results, arrays, type, shuffle } = randomObj
  shuffle = (typeof shuffle !== 'undefined') ?  shuffle : true;

  let output = [];

  switch (type) {
    case 'multi':
    for (let array in arrays) {
        for (let i = 0; i < results[array]; i++) {
          if (results[array] > arrays[array].length) {
            return undefined;
          }
          let randomIndex;
          let randomElement;
          do {
            randomIndex = Math.floor(Math.random() * arrays[array].length);
            randomElement = arrays[array][randomIndex];
          } while (output.includes(randomElement))
          output.push(randomElement);
        }
      }
      if(shuffle){
        return shuffler(output)
      } else {
        return output;
      }

    case 'single':
          for (let slice in index) {
              let range = ((index[slice][1] - index[slice][0]) +1)
              if (range <1 || index[slice][1] > (array.length - 1)) {
                return undefined;
              }
        for (let i = 0; i < results[slice]; i++) {
          if (results[slice] > range) {
            return undefined;
          }
          let randomIndex;
          let randomElement;
          do {
            randomIndex = ((Math.floor(Math.random() * range)) + index[slice][0]);
            randomElement = array[randomIndex];
          } while (output.includes(randomElement))
          output.push(randomElement);
        }
      }
      if(shuffle){
        return shuffler(output)
      } else {
        return output;
      }


    default: return null
  }

}
module.exports = weighted;