module.exports = function longestConsecutiveLength(array) {
  let counter = 0;
  let counterArr = [];

  if (array.length == 0) {
    return 0;
  }

  array.sort(sorting);
  array = unique(array);

  for (let i = 0; i < array.length; i++) {
    if ((array[i + 1] - array[i]) == 1) {
      counter++;
    } else if ((array[i + 1] - array[i]) == 1) {
      continue;
    } else {
      counterArr.push(counter);
      counter = 0;
    }
  }
  let max = counterArr[0];
  for (let i = 0; i < counterArr.length; i++) {
    if (max < counterArr[i]) {
      max = counterArr[i];
    }
  }
  return (max + 1);

  function sorting(a, b) {
    return a - b;
  }

  function unique(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      obj[key] = true;
    }

    return Object.keys(obj);
  }
}