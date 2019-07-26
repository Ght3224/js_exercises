// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// function printNumbersDivisibleByThree() {
//   var index = 1;
//   while (index <= 1000) {
//     if (index % 3 === 0) {
//       console.log(index);
//     }
//     index += 1;
//   }
// }
// printNumbersDivisibleByThree();


// Write a method that accepts an array of strings and prints out every other string.

function everyOther(string) {
  var array = [];
  var i = 1;
  while (i < string.length) {

    array.push(string[i]);
    i += 2;

  }

  console.log(array);

}

everyOther('hell');



// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  console.log(sum);
}
computeSum([2, 4, 5]);

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 


// i = 1
// while (i < 101) {
//   console.log(i);
//   i++;
// }



// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// i = 1
// while (i < 101) {
//   console.log(i);
//   i+=2;
// }


// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.


// var array = [33, 55, 55, 29];

// function count55(array) {
//   var i = 0;
//   var count = 0;

//   while ( i < array.length ) {
//     if (array[i] === 55) {
//       count++; } 
//     i++; } 

//   console.log(count); }

// count55(array)



// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].




// function insertAwesomeSauce(array) { 
// var array1 = []

// var i = 0;
//   array = ["a", "b", "c", "d", "e"]
//   array.forEach(function(element) {
//     array1.push(element);
//     array1.push("awesomesauce");
// });



// console.log(array1);



// 
// }


// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}




function buyChairs(item,amount) {

  var hash = {chair: 5, table: 2};
    if (item === 'chair') {
      hash['chair']-=amount;
    }
    console.log(hash);
  }

buyChairs('chair', 3);

  














// function buyItems(item, amount){
//   var itemAmounts= {chair: 5, table: 2};
//   if (item === "chair")  {
//     itemAmounts['chair'] -= amount
//   }
//   console.log(itemAmounts);
// }




// buyItems('chair', 2)
// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}


// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// function factorial(number) {
//   var i = parseInt("1");
//   while (i < parseInt("number")) {
//     number *= i;
//     i++; 
//   }
//   console.log(number);
// }

// factorial(5);


function factor(number) {

  for (var i = number - 1; i > 1; i--) {
    number *= i;
  }
  console.log(number); 
}


factor(5); 




// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].



// var array1 = [1,5,10];
// var array2 = [100,500,1000];

// function addArrays(array1, array2) {
//   var i = 0;
//   var resultant = [];

//   while (i < array1.length) {
//     var j = 0;
//     while (j < array2.length) {
//       resultant.push(array1[i] + array2[j]);
//       j++;
//     }
//     i++;
//   }

//   resultant = resultant.filter(value => !Number.isNaN(value));

//   // resultant.pop;

//   console.log(resultant);
// }


// addArrays(array1, array2);