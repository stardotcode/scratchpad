const mergeLists = (listA, listB) => {
  let merged = [],
    i = 0,
    maxIterations = (listA.length >= listB.length) ? listA.length : listB.length,
    aExists, bExists;

  while (i < maxIterations) {
    aExists = typeof listA[i] !== 'undefined';
    bExists = typeof listB[i] !== 'undefined';

    if (aExists && (listA[i] < merged[merged.length-1])) {
      merged.push(listA[i], merged.pop());
    }
    
    if (bExists && (listB[i] < merged[merged.length-1])) {
      merged.push(listB[i], merged.pop());
    }

    if (aExists && bExists) {
      if (listA[i] < listB[i]) {
        pushOntoArray(listA[i], merged);
        pushOntoArray(listB[i], merged);
      } else {
        pushOntoArray(listB[i], merged);
        pushOntoArray(listA[i], merged);
      }
    } else if (aExists) {
      pushOntoArray(listA[i], merged);
    } else if (bExists) {
      pushOntoArray(listB[i], merged);
    }

    i++;
  }
  return merged;
};

const pushOntoArray = (value, array) => {
  if (array.indexOf(value)===-1) {
    array.push(value);
  }
};

const nums1 = [1, 5, 8, 12, 14, 19, 20, 23];
const nums2 = [3, 4, 6, 10, 11, 15];
let mergedNums = mergeLists(nums1, nums2);
let html = 'Nums 1: ' + nums1 + '<br/>Nums 2: ' + nums2 + '<br/>Merged: ' + mergedNums;

document.getElementById('root').innerHTML = html;