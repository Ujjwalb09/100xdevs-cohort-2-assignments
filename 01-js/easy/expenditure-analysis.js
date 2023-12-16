/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryObj = {};

  transactions.forEach((obj) => {
    let keysArray = Object.keys(categoryObj);

    if (!keysArray.includes(obj.category)) {
      categoryObj[obj.category] = obj.price;
    } else {
      categoryObj[obj.category] += obj.price;
    }
  });

  let categoryArray = [];

  for (const [key, value] of Object.entries(categoryObj)) {
    categoryArray.push({ category: key, totalSpent: value });
  }

  return categoryArray;
}

module.exports = calculateTotalSpentByCategory;

//[

//{itemName : Jeans, category : clothing, price : 1000, timeStamp : 4th},
//{itemName : machine, category : electronic, price: 1000, timeStamp : 5th},
//{itemName : Shirt, category : clothing, price : 2000, timeStamp : 6th}

//];
