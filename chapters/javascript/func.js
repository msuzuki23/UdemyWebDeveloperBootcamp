// function doSomething(str) {
//     console.log(str);
// }

// var str = "Hi there!";
// doSomething(str);



// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// var city = "paris";
// var capital = capitalize(city);

// console.log(capital);



function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
    
var city = "paris";
var capital = capitalize(city);

console.log(capital);