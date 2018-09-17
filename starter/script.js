/////////////////////////////////
// let and const

// //ES5
// var name5 = 'Jane Smith';

// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = 'Jane Smith';
// let age = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// // ES5
// function driversLicence5(passedTest) {
//     if (passedTest) {

//         var firstName = 'John';
//         var yearOfBirth = 1990;

//     }
//     console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to driver a car.');
// }
// driversLicence5(true);


// // ES6
// function driversLicence6(passedTest) {

//     let firstName;
//     const yearOfBirth = 1990;
//     if (passedTest) {
//         firstName = 'John';


//     }
//     console.log(firstName + ' born in ' + yearOfBirth + ' is allowed to driver a car.');
// }
// driversLicence6(true);

// // ES5
// var i = 23;
// for (var i = 0; i < 5; i++) {
//     console.log(i)

// }

// console.log(i);

// // ES6
// let i = 23;
// for (let i = 0; i < 5; i++) {
//     console.log(i)

// }

// console.log(i);


/////////////////////////////////
// Blocks and IIFEs

//ES6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }
// // console.log(a + b);
// console.log(c);

//ES5
// (function () {
//     var c = 3;
// })();

// console.log(c);


/////////////////////////////////
// Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. today he is ' + calcAge(yearOfBirth) + ' year old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${ firstName } ${ lastName }`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));













