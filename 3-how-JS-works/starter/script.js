///////////////////////////////////////
// Lecture: Hoisting
/* 
var birthYear = 1965;

// Hoisting with functions:
//  - works with function declarations
//  - in practical terms, you can call a function before it is declared 
calculateAge(birthYear);

function calculateAge(year) {
    console.log(new Date().getFullYear() - year);
}

// This does not work with function expressions. 
// retirement(birthYear);    // Results in an error. 

// Function expression
var retirement = function(year) {
    console.log(65 - (new Date().getFullYear() - year));
} 


// Hoisting with variables:
//  - you can use a variable before it is declared
//  - however, variables accessed before they are declared and initialised are set to undefined 
console.log(age)    // Result: undefined

var age = 23;       // Declared in global execution context
console.log(age);   // Result: 23

function foo() {
    console.log(age)    // Result: undefined
                        //  - if 'age' was not declared in this execution context, result: 23
    
    // This 'age' variable is different to the one declared earlier. 
    var age = 65;       // Declared in function 'foo' execution context
    console.log(age);   // Result: 65
}

foo();
console.log(age);   // Result: 23
                    // Referencing 'age' variable in global execution context
*/








///////////////////////////////////////
// Lecture: Scoping
/*
// First scoping example 
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a, b, c);
    }
}


// Example to show the difference between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(a, b, c, d);    // Does not have access to variables b and c
    console.log(a, d);
}
*/








///////////////////////////////////////
// Lecture: The this keyword
/* 
// Global / Window object
console.log(this);

calculateAge(1985);

// Regular functions -> this = global / window object
function calculateAge(birthYear) {
    console.log(this);
    console.log(new Date().getFullYear() - birthYear);
}

var john = {
    name: 'John',
    yob: 1990,

    // Object method -> this = that specific object
    age: function() {
        console.log(this);
        console.log(new Date().getFullYear() - this.yob);

        // 
        // // This is still a regular function even though it is inside the 
        // // object method. 
        // // Therefore -> this = global / window object
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

john.age();

var mike = {
    name: 'Mike',
    yob: 1984
}

// Method borrowing
mike.age = john.age;

// Now the 'ths; keyword in this function refers to the mike object. 
mike.age();
 */
