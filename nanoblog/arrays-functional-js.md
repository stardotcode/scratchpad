# Arrays with Functional Javascript

Functional programming (FP) is catching on in the Javascript world. Some key concepts behind FP are pure functions, immutable data, and declarative programming. If you're programming in Javascript, you have probably used a lot of these concepts already. Functions are first-class objects in Javascript -- they can be passed in (as arguments) or returned from other functions, and even stored in variables.

Let's look at some ways to iterate over data in arrays using `map`, `reduce`, `filter` and `find`. These methods are higher-order functions -- they accept other functions as arguments. You can chain them together to form a pipeline of operations.

## map

`map` can be used to transform elements of an array with a callback function.

```
const shinyNewArray = inputArray.map(callbackFn);
```

In the example below we're passing `x => x * x` as the callback function. `map` calls this function on each element as it iterates over the calling array (`input`). A new array (`squared`) is returned with elements that are the result of the callback function.

```
const input = [1, 2, 3, 4];

const squared = input.map(x => x * x);

console.log(squared)
> [1, 4, 9, 16]
```

The callback function takes three arguments as it is invoked for each element in the array.

`const callback = (currentValue, currentIndex, inputArray) => currentValue * 2;`

* `currentValue` - current element of the array (`input`)
* `currentIndex` - index of current element of the array (`input`) _[optional]_
* `inputArray` - the calling array (`input`) _[optional]_

## reduce

`reduce` as the name suggests, can be used to *reduce* an array to a single value. The array traversal is left-to-right. If you want right-to-left, use `reduceRight` instead.

A simple example is computing the sum of numbers in an array.

`const sum = numbersArray.reduce(callbackFn, initialValue);`

Another example below is to count the number of elements by color.

```
const items = ['red', 'green', 'yellow', 'grey', 'green', 'red', 'red', 'blue'];

const colorCounts = items.reduce((countMap, currentValue) => {
  countMap[currentValue] = ++countMap[currentValue] || 1;
  return countMap;
}, {});

console.log(colorCount)
> {red: 3, green: 2, yellow: 1, grey: 1, blue: 1}
```

The callback function takes four arguments when it is invoked for each iteration.

`const callback = (accumulator, currentValue, currentIndex, inputArray) => accumulator + currentValue;`

* `accumulator` - the accumulated value from the last iteration of callback function
* `currentValue` - current element of the array (`items`)
* `currentIndex` - index of the current element of the array (`items`) _[optional]_
* `inputArray` - the calling array (`items`) _[optional]_

If you get a bad return value, double check that you've not forgotten an `initialValue` (to initialize the accumulator). Also, don't forget to actually return the accumulated value from the callback.

## filter

`filter` is used to create a new array with only those elements (from the calling array) that satisfy a condition in callback function.

`const filteredArray = [1,2,3,4].filter(callbackFn);`

For example, given an array of user objects, you want those who are over the age of 18. The callback function tests the `age` attribute in each iteration.

```
const users = [
  { name: 'Bertie', age: 32 },
  { name: 'Jeeves', age: 36 },
  { name: 'Oswald', age: 12 },
  { name: 'Spode', age: 7 },
  { name: 'Tuppy', age: 15 }
];

const grownUps = users.filter(user => user.age >= 18);

console.log(grownUps)
> [ { name: 'Bertie', age: 32 }, { name: 'Jeeves', age: 36 } ]
```

The callback function accepts the same arguments as the one for `map`.

## find

`find` returns the *first* element (left-to-right) in the array that satisfies the condition set by the callback function. Otherwise it returns `undefined`.

`const oneElement = inputArray.find(callbackFn);`

Say we want to find the first even number.

```
const numbers = [1, 5, 8, 2, 7, 10];

const even = numbers.find(currentValue => currentValue % 2 === 0);

console.log(even);
> 8
```

Although multiple elements of the `numbers` array satisfied the condition in the callback function, only the first was returned.

The callback function accepts the same arguments as the one for `map`.

### :)
