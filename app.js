let emptyArray = [];


let emptyString = ["ArryOne"];

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // displays "j" in an alert box



var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
console.log(arrayLength); // displays 8 in the console


var myArray = ["apple"];
myArray[1] = "banana";
alert(myArray[1]); // displays "banana" in an alert box


var myArray = ["apple"];
myArray.push("banana");
alert(myArray[myArray.length - 1]); // displays "banana" in an alert box


var Alphabet = ["h", "i", "j", "k"];
var removedValue = Alphabet.pop();
console.log(Alphabet); // displays ["h", "i", "j"] in the console
console.log(removedValue); // displays "k" in the console



var Alphabet = ["h", "i", "j", "k"];
var newLength = Alphabet.push(5);
console.log(Alphabet); // displays ["h", "i", "j", "k", 5] in the console
console.log(newLength); // displays 5 in the console


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var removedValue = sizes.shift();
console.log(sizes); // displays ["M", "XL", "XXL", "XXXL"] in the console
console.log(removedValue); // displays "S" in the console



var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
console.log(sizes); // displays [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"] in the console



var myArray = ["apple"];
var newLength = myArray.unshift("banana");
alert(myArray[0]); // displays "banana" in an alert box
alert(newLength); // displays 2 in an alert box



var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var removedElements = sizes.splice(2, 0, "L");
console.log(sizes); // displays ["S", "M", "L", "XL", "XXL", "XXXL"] in the console
console.log(removedElements); // displays [] in the console