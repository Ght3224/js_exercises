// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])




// function findMax(array) {
//   var i = 0;
//   var max = i;

//   while (i < array.length) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//     i++;
//   }
//   console.log(max);
// }

// findMax([1,3,4,8,5]);



// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])



// function descNo(array) {

//   var result = [];
//   var index = array.length - 1;

//   while (index >= 0) {
//     result.push(array[index]);
//     index-- ;
//   }
//   console.log(result);

// }



// descNo([1, 3, 5, 7]);


//Binary Sort 



// function binarySort(array, desired) {





// }

// [1,2,3,4]

// var m = 101;

// var t = m / 2;

// console.log(parseInt(t));


// function numberOfA(string) {
//   var i = 0;
//   var count = 0;
//   while (i < string.length - 1) {
//     if (string[i] === 'a') {
//       count++;
//     } i++;
//   } 

//   console.log(count);

// }

// numberOfA('hát');


function twoArgs(array1,num) {
  var i = 0;
  var result = [];

  while (i < array1.length) {
    if (array1[i] < num && array1[i + 1] > num) {
      array1.splice(i + 1, 0, num);
    }
    i++;
  } console.log(array1); 
}


//   var i = 0;

//   while (array1[i] !== num ) {
//     if (array1[i] === num) {
//       i = num;
//     } else if (array1[i] > array1.indexOf(num) { 
//       array1 = array1[0..array1.indexOf(num)-1]

//     }
  

//   console.log(i);

// }


twoArgs([0,0,0,2,5,7,7], 4); 




































