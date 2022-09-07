const plusOne = (array) => {
  const rec = (arr, savedArrayLength) => {

    // CASE 1
    // arr = []
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

    // CASE 2
    // item is first array element
    if(fullArrayLength === savedArrayLength) {
      if (!shift) {
        return ([item].concat(value))
      }
      if (item < 9) {
        return ([item+1].concat(value))
      }
      return ([1,0].concat(value))
    }

    // CASE 3
    // array is [0,1,2,...,n] -> item in [1,...,n]
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

  return rec(array, array.length)
}

module.exports = plusOne