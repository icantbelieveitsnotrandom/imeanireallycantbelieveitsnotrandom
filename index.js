function randomize(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr
}


function weighted(randomObj) {
  let total = Object.values(randomObj.weight).reduce((a,b) => a+ b)
  let results = [];

  for(array in randomObj.arrays) {
    for(let i = 0; i < randomObj.weight[array]; i++) {

      let randomIndex;
      let randomElement;

      do {
        randomIndex = Math.floor(Math.random()*randomObj.arrays[array].length);

        randomElement = randomObj.arrays[array][randomIndex];

      } while(results.includes(randomElement))

      results.push(randomElement);
    }
  }

  return randomize(results)
}

module.exports = randomize;