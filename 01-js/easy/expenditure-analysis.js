/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  var spentOnCategory = {}

  var set1 = new Set();
  transactions.map((transaction) => {
    set1.add(transaction.category);
   })
   set1.forEach((ele) => {
    spentOnCategory[ele] = 0
   })
    transactions.map((transaction) => {
     spentOnCategory[transaction.category] += transaction.price;
    })
    var keys = Object.keys(spentOnCategory)
    var results = []
    keys.map((key) =>{
      results.push({category:key, totalSpent:spentOnCategory[key]})
    })
  return results;
}

module.exports = calculateTotalSpentByCategory;
