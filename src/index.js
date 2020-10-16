module.exports = check;
/**
 * 
 * @param {string} str 
 * @param {*} bracketsConfig 
 */
function check(str, bracketsConfig) {
  let char,
    last,
    stack = [];
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char == '(' || char == '{' || char == '[' || (char == '|' && stack.indexOf('|') == -1) || char == '1' || char == '3' || char == '5' || (char == '7' && stack.indexOf('7') == -1) || (char == '8' && stack.indexOf('8') == -1)) {
      stack.push(char);
      last = char;
    } else if (char == ')' || char == '}' || char == ']' || char == '|' || char == '2' || char == '4' || char == '6' || char == '7' || char == '8') {
      if (last) {
        if ((char == '}' && last == '{') || (char == ')' && last == '(') || (char == ']' && last == '[') || (char == '|' && last == '|') || (char == '2' && last == '1') || (char == '4' && last == '3') || (char == '6' && last == '5') || (char == '7' && last == '7') || (char == '8' && last == '8')) {
          stack.pop();
          last = stack.length > 0 ? stack[stack.length - 1] : undefined;
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
