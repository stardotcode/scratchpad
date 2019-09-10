const nums1 = [1, 5, 8, 12, 14, 19, 20, 23];
const nums2 = [3, 4, 6, 10, 11, 15];
const nums3 = [7, 9, 13, 18, 21, 24, 27];
let html = '';

/**
 * Merge n sorted arrays
 * @param {array} inputArrays - 1 or more arrays of sorted numbers
 * @returns {array} mergedArray - merged array of sorted numbers
 */
const mergeLists = (...inputArrays) => {
  // colors for each input array
  const colors = ['#4096EE', '#008C00', '#CC0000', '#FF7400', '#FF1A00', '#6BBA70']; // upto 6 for now
  const totalItemsCount = inputArrays.reduce((total, currentValue) => total + currentValue.length, 0);
  let n=0, m=0, minValueArray, currentValue, min=undefined, mergedArray=[], mergedArrayColor=[], numberOfArrays=inputArrays.length;
  html += 'Input arrays ' + inputArrays.map((a, idx) => '<br/><span style="color:'+colors[idx]+'">' + idx + ': ' + a + '</span>');

  for (n; n < totalItemsCount; n++) {
    for (m; m < numberOfArrays; m++) {
      if (typeof inputArrays[m][0] !== 'undefined') {
        currentValue = inputArrays[m][0];
        if (typeof min === 'undefined') {
          min = currentValue;
          minValueArray = m;
        } else if (min > currentValue) {
          min = currentValue;
          minValueArray = m;
        }
      }
    }

    // don't merge duplicate values
    if (mergedArray.indexOf(inputArrays[minValueArray][0]) === -1) {
      mergedArray.push(inputArrays[minValueArray].shift());
      mergedArrayColor.push(minValueArray); // reference to input array color
    }

    // reset for next iteration
    min = undefined;
    m = 0;
  }

  html += '<br/><br/>Merged array<br/>' + mergedArray.map((e, idx) => '<span style="color:'+colors[mergedArrayColor[idx]]+'">'+ e +'</span>');
  document.getElementById('root').innerHTML = html;

  return mergedArray;
};

mergeLists(nums1, nums2, nums3);
