// var friends = ["Anna", "Bia", "Charlie", "Daniel"]
// friends.push("Edward");
// friends.pop();
// friends.push("Edgard");
// for(i=0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
// console.log(friends[friends.length-1]);

// friends.shift();

// for(i=0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.unshift("Annabell");
// for(i=0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
// console.log(friends.indexOf("Charlie"));

// var bestFriends = friends.slice(1,4);
// console.log("Total Number of Friends: " + friends.length);
// console.log("Best Friends:");
// for(i=0; i < bestFriends.length; i++) {
//     console.log(bestFriends[i]);
// }



// var friendGroups = [
//     ["Anna", "Annibal", "Ana Maria"],
//     ["Bruno", "Bia", "Beto"],
//     ["Charlie", "Carlos", "Camila"]
// ];

// for(var i=0; i < friendGroups.length; i++) {
//     for(j=0; j < friendGroups[i].length; j++) {
//         console.log(friendGroups[i][j]);
//     }
// }



// var colors = ["Yellow", "Red", "Green", "Orange", "Blue"]

// colors.forEach(function(color){
//     console.log(color);
// });



// function printReverse(arr){
//     for( var i = arr.length - 1; i >=0; i--) {
//         console.log(arr[i]);
//     }
// }

// var nums = ["a","b","c","d","e"];
// printReverse(nums);



// function sumArray(arr) {
//     var total = 0;
//     arr.forEach(function(element){
//         total += element;
//     });
//     return total;
// }

// var numbers = [1,2,3,4];
// total = sumArray(numbers);
// console.log(total);



function max(arr) {
    var maxValue = arr[0];
    arr.forEach(function(element){
        if(element > maxValue) {
            maxValue = element;
        }
    })
    return maxValue;
}

numbers = [1,2,3,4,5,6,7];
maxValue = max(numbers);
console.log(maxValue);

