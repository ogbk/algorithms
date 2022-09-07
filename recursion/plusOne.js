// Simple function
const plusOne1 = (array) => {
  const rec = (arr, savedArrayLength) => {

    // CASE 1 -> arr = []
    if(arr.length === 0) {
      return {
        shift: true,
        value: []
      }
    }

    const fullArrayLength = arr.length;

    // store item &
    // arr is now without first elem
    const item = arr.shift();

    const {shift, value} = rec(arr);

    // CASE 2 -> item is first array element
    if(fullArrayLength === savedArrayLength) {
      if (!shift) {
        return ([item].concat(value))
      }
      if (item < 9) {
        return ([item+1].concat(value))
      }
      return ([1,0].concat(value))
    }

    // CASE 3 -> array is [0,1,2,...,n] -> item in [1,...,n]
    if (!shift) {
      return {
        value: [item].concat(value),
        shift: false
      }
    }

    if (item < 9) {
      return {
        value: [item+1].concat(value),
        shift: false
      }
    }

    return {
      value: [0].concat(value),
      shift: true
    }
  }

  // before running, check
  // - argument is Array<numbers>
  //    contains only numbers & not NaN
  // - argument !== []
  // - all items are digits [0 - 9]

  try {
    if (!Array.isArray(array)) {
      throw new Error(`given argument is of type: '${typeof(array)}'`)
    }
  
    if (array.length === 0) {
      throw new Error('array is empty')
    }
  
    array.forEach((value,index) => {
      if (typeof(value) !== 'number') {
        throw new Error(`ARRAY[${index}] is of type: '${typeof(value)}'`)
      }
      if (isNaN(value)) {
        throw new Error(`ARRAY[${index}] is NaN`)
      }
      if (value < 0 || value > 9) {
        throw new Error(`ARRAY[${index}] is not between 0 & 9`)
      }
    })

    return rec(array, array.length)
  } catch(ex) {
    console.log(`ERROR: ${ex.message}`)
  }
}

// Longer function
const plusOne2 = (array) => {
  const rec = (remainder, result) => {
    if (remainder.length === 0) {
      return ([1].concat(result));
    }

    const lastElem = remainder.pop();
    if (lastElem < 9) {
      return (remainder.concat(lastElem+1, result));
    }
    return rec(remainder, [0].concat(result))
  }

  return rec(array, [])
}

module.exports = { plusOne1, plusOne2 }