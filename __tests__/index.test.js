
'use strict';

let weighted = require('../index.js');

const errorDemo1 = {
  type: 'single',

  array: ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5'],

  index: {
    a: [0, 0],
  },
  results: {
    a: 2,
  },
};

const errorDemo2 = {
  type: 'single',

  array: ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5'],

  index: {
    a: [1, 0],
  },
  results: {
    a: 1,
  },
};

const errorDemo3 = {
  type: 'multi',
  arrays: {
    a: ['a1', 'a2', 'a3', 'a4', 'a5'],
    b: ['b1', 'b2', 'b3', 'b4', 'b5'],
    c: ['c1', 'c2', 'c3', 'c4', 'c5'],
  },
  results: {
    a: 6,
    b: 2,
    c: 2,
  }
};

const errorDemo4 = {

  array: ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5'],

  index: {
    a: [1, 0],
  },
  results: {
    a: 1,
  },
};

const single = {
type: 'single',

array: ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5'],

index: {
  a: [0, 4],
  b: [5, 9],
  c: [5, 14],
},
results: {
  a: 1,
  b: 1,
  c: 3,
}
};

const multi = {
    type: 'multi',
    arrays: {
      a: ['a1', 'a2', 'a3', 'a4', 'a5'],
      b: ['b1', 'b2', 'b3', 'b4', 'b5'],
      c: ['c1', 'c2', 'c3', 'c4', 'c5'],
    },
    results: {
      a: 1,
      b: 2,
      c: 2,
    }
  };

const singleNoShuffle = {
  type: 'single',

  shuffle: false,
  
  array: ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5'],
  
  index: {
    a: [0, 4],
    b: [5, 9],
    c: [5, 14],
  },
  results: {
    a: 1,
    b: 1,
    c: 3,
  }
  };

const multiNoShuffle = {
  type: 'multi',
  shuffle: false,
  arrays: {
    a: ['a1', 'a2', 'a3', 'a4', 'a5'],
    b: ['b1', 'b2', 'b3', 'b4', 'b5'],
    c: ['c1', 'c2', 'c3', 'c4', 'c5'],
  },
  results: {
    a: 1,
    b: 2,
    c: 2,
  }
};

describe('weighted() randomizer function', () => {
  it('weighted() single returns undefined when the number of items requested is larger than the slice length', () => {
    expect(weighted(errorDemo1)).toBe(undefined);
  });

  it('weighted() single returns undefined when the slice is not a positive integer', () => {
    expect(weighted(errorDemo2)).toBe(undefined);
  });

  it('weighted() single returns a randomized array when correct input is given', () => {
    expect(weighted(single).length).toBe(5);
  });

  it('weighted() multi returns undefined when the number of items requested is larger than the array length', () => {
    expect(weighted(errorDemo3)).toBe(undefined);
  });

  it('weighted() multi returns a randomized array when correct input is given', () => {
    expect(weighted(multi).length).toBe(5);
  });

  it('weighted() returns null when no type is given', () => {
    expect(weighted(errorDemo4)).toBe(null);
  });

  it('weighted() single returns unshuffled output when shuffle is false', () => {
    expect(weighted(singleNoShuffle)[0]).toEqual(expect.stringContaining('a'));
  });

  it('weighted() multi returns unshuffled output when shuffle is false', () => {
    expect(weighted(multiNoShuffle)[0]).toEqual(expect.stringContaining('a'));
  });

});