
#{Autumn's Randomizer}

##Description

{Autumn's Randomizer} is a customizeable weight randomization function. It allows data input through array(s) and selects a specified number of random items to return a weighted result. It can take single or multiple arrays of items as inputs.

The function also has an {optional} {shuffle} function to rearrange the order of items.

##How To Use

The randomizer takes data in two forms - single array and multi-array.

1. Single Array
    This version takes a single array of items to be randomized, and chooses from them based on the index.
    In the "type" key of the object, specify "single". In the "index" key of the object, specify how you would like to split up the array by index, using unique keys. Overlapping is allowed. In the "results" key, specify how many random items you'd like selected from each section of the array with the same key.

    Example:
    
``{ type: 'single',

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
}``

This example will choose 1 random item from the a section (index 0-4), 1 random item from the b section (index 5-9) and 3 random items from the b-c sections (index 5-14).

2. Multi-Array
    This version takes multiple input arrays of items and selects a specified number of random items from each array.
    In the "type" key of the object, specify "multi". In the "arrays" key of the object, put your arrays with individual keys. In the "results" key, specify how many random items you'd like selected from each array with the same key.

    Example:

``{ type: 'multi',
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
}``

    This example will choose 1 random item from the "a" array, 2 random items from the "b" array, and 2 random items from the "c" array.