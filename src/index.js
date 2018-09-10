module.exports = function check(str, bracketsConfig) {
  let stack = [];
  stack.top = () => stack[stack.length - 1];

  let bracketsMap = {};
  bracketsConfig.forEach(([open, close]) => bracketsMap[open] = close);
  for(var char of str) {
      if(char === stack.top()) {
          stack.pop();
          continue;
      }
      if(!bracketsMap[char]) {
          return false;
      }
      stack.push(bracketsMap[char]);
  }

  return stack.length === 0;
}
