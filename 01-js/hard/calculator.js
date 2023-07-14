/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result = 0;
  }

  add(number){
    this.result += number;
  }
  subtract(number){
    this.result -= number;
  }
  multiply(number){
    this.result *= number;
  }
  divide(number){
    this.result /= number;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(expr){
    expr_without_spaces = []
    expr_brokedown = expr.split("");
    expr_brokedown.forEach((char) => {
        if (char != " "){
          expr_without_spaces.push(char)
        }
    })
    currentExpr = []
    currentOperator = []
    openParanthesis = 0
    // orig_expr = expr_without_spaces.join("")
    expr_without_spaces.forEach((char) => {
      if (char >= "0" && char <= "9"){
        if (currentExpr.length > 0){
          if (currentOperator.length > 0){

          }
        }
        currentExpr.push(char)
      
      }else if (char == "+" || char == "-" || char == "*" || char == "/"){
        currentOperator.push(char)
      }
      else{
        throw "Such Inputs not Allowed"
      }

    })
  }

}

module.exports = Calculator;



function open_brackets_finder(idx, str1){
  more_open_paranthesis = 0
  for (let i = idx; i<str1.length;i++){
    if (str1[i] == ")"){
      if (more_open_paranthesis == 0){
        return i
      }else{
        more_open_paranthesis -= 1;
      }
    }else if (str1[i] == "("){
      more_open_paranthesis += 1;
    }
  }
  
}

function calculate(expr){
    var expr_without_spaces = []
    expr_brokedown = expr.split("");
    expr_brokedown.forEach((char) => {
        if (char != " "){
          expr_without_spaces.push(char)
        }
    })
    expr_without_spaces = expr_without_spaces.join("")
    console.log(expr_without_spaces);
    expr_without_brackets = []
    close_idx = -1
    for (let i=0; i<= expr_without_spaces.length;i++){
      if (close_idx == -1){
        if (expr_without_spaces[i] == "("){
        close_idx = open_brackets_finder(i,expr_without_spaces)
         }
      }else{
        if (i > close_idx){
          
        }
      }
      
    }
  
  
    currentExpr = []
    currentOperator = []
    openParanthesis = 0
    // orig_expr = expr_without_spaces.join("") 
    expr_without_spaces.forEach((char) => {
      if (char >= "0" && char <= "9"){
        if (currentExpr.length > 0){
          if (currentOperator.length > 0){
            /[!\s_]+/
          }
        }
        currentExpr.push(char)
      
      }else if (char == "+" || char == "-" || char == "*" || char == "/"){
        currentOperator.push(char)
      }
      else{
        throw "Such Inputs not Allowed";
      }

    })
  }

calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7')
