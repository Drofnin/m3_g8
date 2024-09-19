console.log('Hello, world! 🙌');
let firstName='Anders';

//------------------------------
let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4 aged? 4 : 0; // it was a typescript error, was assigned  to be a value of string, but should have been a number
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);

let order = 'first';
order = '1';

//---------------------------------------

//Original code

let firstName = 'muriel!';

console.log(firstName.toUppercase()); // when running tsc comes up TypeError: 

console.log(firstName.lenght); // lenght is misspelled, it should be length


// how I dit it:

let firstName = 'muriel!';

console.log(firstName.toLowerCase()); // the c in 'case' was in lowercase letters, I changed it in capital letters

console.log(firstName.length); // correct spelling

//------------------------------------------------

let guess;
console.log(guess) 
guess = "blue"
guess = 0

//--------------------------------------------


//original code, 

let phoneNumber;      // tsc asks to add a string type declarition to PhoneNumber

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = 7167762323;

}

//how I did it
let phoneNumber: string; // need to identy it as a string


if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323'; // the phonenumber wasnt in string like phonenumber above
}