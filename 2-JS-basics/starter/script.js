/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/**
 * Returns the body mass index (BMI) of an individual. 
 * 
 * @param {number} mass The mass of the individual in kg. 
 * @param {number} height The height of the individual in metres. 
 */
/*
function BMI(mass, height) {
    return mass / Math.pow(height, 2);
}

// 1.
// Mark
var massMark = 68,
    heightMark = 1.8;

// John
var massJohn = 92,
    heightJohn = 1.7;

// 2.
var BMIMark = BMI(massMark, heightMark).toFixed(2);
var BMIJohn = BMI(massJohn, heightJohn).toFixed(2);

// 3.
var markBMIHigher = BMIMark > BMIJohn;

// 4.
console.log(`Mark's BMI = ${BMIMark}\nJohn's BMI = ${BMIJohn}`);
console.log(`Is Mark's BMI higher than John's: ${markBMIHigher}`)
*/



/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/



/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'designer';

switch (job) {
    case 'teacher':
        console.log(firstName, 'teaches kids how to code.');
        break
    case 'driver':
        console.log(firstName, 'drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName, 'designs beautiful websites.');
        break;
    default: 
        console.log(firstName, 'does something else.');
}

// Make a switch statement operate like if / else statement
switch (true) {
    case age < 13:
        console.log(firstName, 'is a kid.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName, 'is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName, 'is a young man.');
        break;
    default:
        console.log(firstName, 'is a man.');
}
*/



/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}

if (height === '23') {
    console.log('The === operator does not do type coercion!');
}
*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
const scoreJohn = [ 89, 120, 103 ];
const scoreMike = [ 116, 94, 123 ];
const scoreMary = [ 97, 134, 105 ];

var avgScoreJohn = 
    scoreJohn.reduce((a, b) => a + b, 0) // Performs a given function on each element of the array and returns an accumulated result. 
    / scoreJohn.length;
var avgScoreMike = 
    scoreMike.reduce((a, b) => a + b, 0) // In this case, we are calculating the sum of the elements in the array. 
    / scoreMike.length;
var avgScoreMary = scoreMary.reduce((a, b) => a + b, 0) / scoreMary.length;

if (avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary) {
    console.log(`John's team is the winner with ${avgScoreJohn} points!`);
} else if (avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary) {
    console.log(`Mike's team is the winner with ${avgScoreMike} points!`);
} else if (avgScoreMary > avgScoreJohn && avgScoreMary > avgScoreMike) {
    console.log(`Mary's team is the winner with ${avgScoreMary} points!`);
} else if (avgScoreJohn === avgScoreMary && avgScoreMary === avgScoreMike) {
    console.log(`It is a draw! All teams scored ${avgScoreJohn} points! :o`);
}
*/



/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} has ${retirement} years left until retirement.`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
}

yearsUntilRetirement(1990, 'Jordan');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives people to their destinations.';
        case 'designer':
            return firstName + ' designs websites for many companies.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/*****************************
* Arrays
*/
/* 
// Initialise new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // Add element to the end of the array
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);

john.push('blue');
console.log(john);
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesignerJohn = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
// /**
//  * Returns the value of the tip calculated from the bill amount. 
//  * @param {Number} billAmt 
//  */
/* 
function tipCalculator(billAmt) {
    if (billAmt < 50) { 
        return Number((billAmt * 0.2).toFixed(2)); 
    }
    else if (billAmt >= 50 || billAmt <= 200) { 
        return Number((billAmt * 0.15).toFixed(2)); 
    }
    else { 
        return Number((billAmt * 0.1).toFixed(2)); 
    }
}

var bills = [ 124, 48, 268 ];
var tips = [];
var finalBills = [];

for (b of bills) {
    tips.push(tipCalculator(b));
}

for (let i = 0; i < bills.length; i++) {
    finalBills.push(bills[i] + tips[i]);
}

console.log(bills, '\n', tips, '\n', finalBills);

// Alternatively:
// var tips = [tipsCalcutor(bills[0]), tipsCalculator(bills[1]), tipsCalculator(bills[2])];
// var finalBills = [bills[0] + tips[0], 
//                  bills[1] + tips[1],
//                  bills[2] + tips[2])
// ]
*/



/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    fName: 'John', 
    lName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    name: function() {
        return this.fName + ' ' + this.lName;
    }
};

// Access object properties
console.log(john.fName);
console.log(john['lName']);
console.log(john.name());
var x = 'birthYear';
console.log(john[x]);

// Mutate object properties
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.fName = 'Jane';
jane.lName = 'Smith';
jane.birthYear = 1969;
console.log(jane);
*/



/*****************************
* Objects and methods
*/
/*
var john = {
    fName: 'John', 
    lName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    name: function() {
        return this.fName + ' ' + this.lName;
    },
    age: function() {
        return new Date().getFullYear() - this.birthYear
    }
};

console.log(john.age());
*/



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
    fName: 'John',
    lName: 'Smith',
    fullName: function() {
        return this.fName + ' ' + this.lName;
    },
    mass: 92,
    height: 1.7,
    calcBMI: function() {
        this.bmi = Number((this.mass / Math.pow(this.height, 2)).toFixed(2));
        return this.bmi;
    }
};

var mark = {
    fName: 'Mark',
    lName: 'Maloney',
    fullName: function() {
        return this.fName + ' ' + this.lName;
    },
    mass: 68,
    height: 1.8,
    calcBMI: function() {
        this.bmi = Number((this.mass / Math.pow(this.height, 2)).toFixed(2));
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName() + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName() + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/



/*****************************
* Loops and iteration
*/
/*
var upperBound = 10;

// For loop
for (let i = 0; i <= upperBound; i+= 5) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

// for (let i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// While loop
// let i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// Continue and break statements
for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; // Only print strings to the console. 
    console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; // Stop looping the code block if not a string. 
    console.log(john[i]);
}

console.log('---------------------------------------------');

// Looping backwards
for (let i = john.length - 1; i > -1; i--) {
    console.log(john[i]);
}
*/



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
    HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
    HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
    After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var john = {
    name: 'John',
    bills: [ 124, 48, 268, 180, 42 ],
    tips: [],
    finalBills: [],

    calcTips: function() {
        for (let i = 0; i < this.bills.length; i++) {
            let percentage = 0;
            if (this.bills[i] < 50) {
                percentage = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }

            this.tips.push(Number( 
                (this.bills[i] * percentage).toFixed(2)
            ));
        
            // Add tip to array of bill totals. 
            this.finalBills.push(this.tips[i]);
        }

        return {
            tips: this.tips,
            bills: this.finalBills
        };
    }
};

var mark = {
    name: 'Mark',
    bills: [ 75, 375, 110, 45 ],
    tips: [],
    finalBills: [],

    calcTips: function() {
        for (let i = 0; i < this.bills.length; i++) {
            let percentage = 0;
            if (this.bills[i] < 100) {
                percentage = 0.2;
            } else if (this.bills[i] >= 10 && this.bills[i] <= 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }

            this.tips.push(Number( 
                (this.bills[i] * percentage).toFixed(2)
            ));

            // Add tip to array of bill totals. 
            this.finalBills.push(this.tips[i]);
        }

        return {
            tips: this.tips,
            bills: this.finalBills
        };
    }
};

function tipAvg(tips) {
    return tips.reduce((a, b) => a + b, 0) / tips.length;
}

// Calculate tips
console.log(john.calcTips());
console.log(mark.calcTips());

var avgTipsJohn = tipAvg(john.tips),
    avgTipsMark = tipAvg(mark.tips);

console.log(avgTipsJohn, avgTipsMark);

if (avgTipsJohn > avgTipsMark) {
    console.log(john.name + '\'s family paid the most in tips on average.');
} else if (avgTipsMark > avgTipsJohn) {
    console.log(mark.name + '\'s family paid the most in tips on average.');
} else {
    console.log('Both families paid the same amount in tips on average.');
}
*/