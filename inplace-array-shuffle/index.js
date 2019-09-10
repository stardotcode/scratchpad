const input = ['a','b','c','d','e'];
const size = input.length;
let markup = '';
markup += 'Original: ' + input + '<br/>';

const getRandom = (min, max) => {
  const [minVal, maxVal] = [Math.ceil(min), Math.floor(max)];
  return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
};

for (let i=size-1; i>=0; i--) {
  let [min, max] = [1, i];
  let random = getRandom(min, max);
  [input[random], input[i]] = [input[i], input[random]];
}

markup += 'Shuffled: ' + input;
document.getElementById('app').innerHTML =markup;
