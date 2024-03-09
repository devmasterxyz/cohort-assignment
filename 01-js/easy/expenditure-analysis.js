/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();

  for (let i = 0; i < transactions.length; i++) {
    if (map.has(transactions[i]["category"]))
      map.set(
        transactions[i]["category"],
        map.get(transactions[i]["category"]) + transactions[i]["price"]
      );
    else map.set(transactions[i]["category"], transactions[i]["price"]);
  }
  const res = [];
  map.forEach((value, key) => {
    const obj = {
      category: key,
      totalSpent: value,
    };
    res.push(obj);
  });
  return res;
}

module.exports = calculateTotalSpentByCategory;
