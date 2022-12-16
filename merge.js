function merge(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    let a = arr1[i];
    let b = arr2[j];

    if (i === arr1.length) {
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
      return merged;
    }

    if (j === arr2.length) {
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
      return merged;
    }

    if (a <= b) {
      merged.push(a);
      i++;
    } else {
      merged.push(b);
      j++;
    }
  }

  return merged;
}

function mergeSort(array) {
  console.log(array);
  let splitArr = [];
  if (array.length > 1) {
    splitArr = array.splice(Math.floor(array.length / 2));

    let mergedArr = mergeSort(array);
    console.log("mergedArr", mergedArr);

    let mergedSplit = mergeSort(splitArr);
    console.log("mergedSplit", mergedSplit);

    let out = [];
    if (array.length === 1 && mergedSplit.length === 1) {
      out = out.concat(merge(array, splitArr));
    }
  }
  return array;
}

module.exports = { merge, mergeSort };
