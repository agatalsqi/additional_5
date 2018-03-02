module.exports = function check(str, bracketsConfig) {
  var allBracketPairs = "";
  var openingBrackets = "";
  var closingBrackets = "";
  var sameBrackets = "";
  var stack = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    allBracketPairs = allBracketPairs + bracketsConfig[i][0] + bracketsConfig[i][1];
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      sameBrackets = sameBrackets + bracketsConfig[i][0];
    }
    else {
      openingBrackets = openingBrackets + bracketsConfig[i][0];
      closingBrackets = closingBrackets + bracketsConfig[i][1];
    }
  }

  for (var i = 0, isFirstSameBracketPushed = false; i < str.length; i++) {
    if (openingBrackets.indexOf(str[i])+1 && !(sameBrackets.indexOf(str[i])+1)) {
      stack.push(str[i]);
    } 
    
    else if (sameBrackets.indexOf(str[i])+1 && !isFirstSameBracketPushed) {
      stack.push(str[i]);
      isFirstSameBracketPushed = !isFirstSameBracketPushed;
    }
    
    else if (closingBrackets.indexOf(str[i])+1 || sameBrackets.indexOf(str[i])+1) {
      if (stack.length) {
        if ((str[i] == allBracketPairs[allBracketPairs.indexOf(stack[stack.length - 1])+1]) && closingBrackets.indexOf(str[i])+1) {
          stack.pop();
        }

        if (stack[stack.length - 1] == str[i] && sameBrackets.indexOf(str[i])+1 && isFirstSameBracketPushed) {
          stack.pop();
          isFirstSameBracketPushed = !isFirstSameBracketPushed;
        }
      }
      else {
        return false;
      }
    }
  }
  return (!stack.length);
}