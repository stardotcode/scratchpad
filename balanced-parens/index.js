const isBalancedParens = inputString => {
  if (!inputString.length) {
    return false;
  }

  let stack = [];
  const onlyParens = inputString.split('').filter(c =>
    ['{', '}', '(', ')', '[', ']'].indexOf(c) > -1
  );

  onlyParens.map(c => {
    switch(c) {
      case '{':
      case '(':
      case '[':
        stack.push(c);
        break;

      case '}':
        ifCharThenPopStack('{', stack);
        break;

      case ')':
        ifCharThenPopStack('(', stack);
        break;

      case ']':
        ifCharThenPopStack('[', stack);
        break;
    };
  });

  return !!!stack.length;
};

const ifCharThenPopStack = (char, stack) => {
  if (stack[stack.length-1] === char) {
    stack.pop();
  }
};

let html = '';

["{[]()}", "{[(])}", "{[}"].map(str => {
  html += str + ' is ';
  html += isBalancedParens(str) ? 'balanced' : 'un-balanced';
  html += '<br/>';
});

document.getElementById('root').innerHTML = html;
