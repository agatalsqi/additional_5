module.exports = function check(str, bracketsConfig) {
  var allBracketPairs = "";
  var openingBrackets = "";
  var closingBrackets = "";
  var sameBrackets = "";
  var stack = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    allBracketPairs = allBracketPairs + bracketsConfig[i][0];
    allBracketPairs = allBracketPairs + bracketsConfig[i][1];
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      sameBrackets = sameBrackets + bracketsConfig[i][0];
    }
    else {
      openingBrackets = openingBrackets + bracketsConfig[i][0];
      closingBrackets = closingBrackets + bracketsConfig[i][1];
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (openingBrackets.indexOf(str[i])+1 || sameBrackets.indexOf(str[i])+1) {
      stack.push(str[i]);
    }
    else {
      if ((closingBrackets.indexOf(str[i])+1) || sameBrackets.indexOf(str[i]+1)) {
        if (stack.length) {
          if (openingBrackets.indexOf(stack[stack.length - 1])+1 && str[i] == closingBrackets[closingBrackets.indexOf(stack[stack.length - 1])+1]); 
          stack.pop();
        }
        else {
          return false;
        }
      }
    }
  }
  return (!stack.length);
}