function validParentheses(parens) {
  const stack = [];
  
  for (let bracket of parens) {
    if (bracket == '(') stack.push(bracket)
    else {
      if (stack.lastIndexOf('(') != -1) stack.pop(stack.lastIndexOf('(')) 
      else return false
    }
  }
    
  if (!stack.length) return true;
  
  return false;
}

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}