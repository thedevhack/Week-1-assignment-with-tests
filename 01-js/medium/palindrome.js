/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str_caseinsensitive = str.toLowerCase();
  forward_str = str_caseinsensitive.split("");
  forward_str1 = []
  forward_str.forEach((ele) =>{
    if (ele != " " && ele != "?" && ele != "." && ele != "," && ele != "!"){
      forward_str1.push(ele)
    }
  })
  backward_str = []
  for (let i=forward_str1.length-1; i>=0; i--){
    backward_str.push(forward_str1[i])
  }
  if (forward_str1.join("") == backward_str.join("")){
    return true;
  }
  return false;
}

module.exports = isPalindrome;
