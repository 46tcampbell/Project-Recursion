function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const mid = Math.floor(array.length / 2);
    const leftHalfArray = array.slice(0, mid);
    const rightHalfArray = array.slice(mid);
    const newLeftHalfArray = mergeSort(leftHalfArray);
    const newRightHalfArray = mergeSort(rightHalfArray);
    return merge(newLeftHalfArray, newRightHalfArray);
  }

  function merge(arr1, arr2, newArray = []) {
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        newArray.push(arr1[0]);
        arr1.shift();
      } else {
        newArray.push(arr2[0]);
        arr2.shift();
      }
    }
    if (!arr1.length) {
      newArray = newArray.concat(arr2);
    } else {
      newArray = newArray.concat(arr1);
    }
    return newArray;
  }
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
