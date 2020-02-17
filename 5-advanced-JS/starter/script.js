///////////////////////////////////////
// Lecture: Creating Objects - Function Constructors

// var john = {
//     name: 'John',
//     yob: 1990,
//     job: 'teacher'
// };

// // Function Constructor
// //  - Format: function(params...) {}
// //  - Naming Convention: FuncCstrName
// //  - func vs () =>: https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
// //  - Newly created objects inherit from the constructor's prototype property

// /**
//  * Person constructor
//  * @param {String} name 
//  * @param {Number} yob 
//  * @param {String} job 
//  */
// var Person = function(name, yob, job) {
//     this.name = name;
//     this.yob = yob;
//     this.job = job;
// }

// // Adding properties and methods to prototype after the fact
// Person.prototype.funds = 100;
// Person.prototype.country = 'New Zealand';

// Person.prototype.calculateAge = function() {
//     return new Date().getFullYear() - this.yob;
// };

// Person.prototype.greeting = function() {
//     return `Hi, my name is ${this.name}`;
// };

// // Creating an object with func constructor
// //  - An instance of Person
// let bob = new Person('Bob', 1998, 'lead guitarist');
// console.log(bob.name, bob.yob, bob.job);
// console.log(bob.calculateAge());

// let jane = new Person('Jane', 1969, 'designer');
// let mark = new Person('Mark', 1948, 'retired');
// console.log(mark.greeting());


// // Check if object's prototype matches the prototype property of a function constructor
// console.log(
//     'john.__proto__ === Person.prototype?', 
//     john.__proto__ === Person.prototype
// );
// console.log(
//     'mark.__proto__ === Person.prototype?', 
//     mark.__proto__ === Person.prototype
// );


// // Check if object has its own specific property
// //  - DOES NOT INCLUDE properties of parent prototypes
// console.log(mark.hasOwnProperty('job'));
// console.log(mark.hasOwnProperty('country'));    // false ==> property of PARENT prototype, Person


// // Check if object is instance of function constructor
// console.log(john instanceof Person);
// console.log(mark instanceof Person);


// // Practice
// var Pet = function(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// };

// Pet.prototype.species = 'mammal';

// let cat = new Pet('Hairball', 5, 40);
// console.log(cat.species);








///////////////////////////////////////
// Lecture: Object.create

// We first define an object that will act as the prototype, and then create a new object
// based on that very prototype.
// This object will inherit directly from the object passed into the first object. 
//  - Allows us to create really complex inheritant structures in an easier way than function
//    constructors. 

// var personProto = {
//     calculateAge: function() {
//         return new Date().getFullYear() - this.yob;
//     }
// };

// // Creating the object
// var john = Object.create(personProto);
// john.name = 'John';
// john.yob = 1990;
// john.job = 'Teacher';


// // Passing properties into Object.create 
// //  - properties declared like
// //      prop: { value: somevalue }
// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yob: { value: 1969 },
//     job: { value: 'Designer' }
// });

// Check out above in browser console window. 








///////////////////////////////////////
// Lecture: Primatives vs Objects

// // Primitives
// //  - hold actual copies of the values passed in
// var a = 23;
// var b = a;
// a = 46;
// console.log(a + '\n' +  b);

// // Objects
// //  - only hold references to an object created in memory
// var obj1 = {
//     name: 'John',
//     age: '26'
// };
// var obj2 = obj1;    // References the same object as obj1
// obj1.age = 30;
// console.log(obj1.age + '\n' + obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// };
// change(age, obj);

// // Primitive remains unchanged, object is mutated. 
// console.log(age + '\n' + obj.city); 








///////////////////////////////////////
// Lecture: First Class Functions - Passing Functions as Arguments

/* 
    In JS:
    - A function is an instance of the Object type
    - A function behaves like any other object
    - We can store functions in a variable
    - We can pass a function as an argument to another function
    - We can return a function from a function
*/

// var years = [ 1990, 1965, 1937, 2005, 1998 ];


// /**
//  * 
//  * @param {Array} arr The array to be operated on. 
//  * @param {Object} fn Operation to be performed on array.
//  * 
//  * @return {Array} 
//  */
// function arrayCalc(arr, fn) {
//     result = [];
    
//     for (let i = 0; i < arr.length; i ++) {
//         result.push(fn(arr[i]));
//     }

//     return result;
// }

// function calculateAge(el) {
//     return new Date().getFullYear() - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } 

//     return -1;
// }

// // When passing a function as a parameter, remove the brackets.
// // Remember that you are not calling the function. You are just passing it as a parameter. 
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var heartRates = arrayCalc(ages, maxHeartRate);
// console.log(heartRates);








///////////////////////////////////////
// Lecture: First Class Functions - Functions Returning Functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         };
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ', what subject do you teach?');
//         };
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do as a ' + job + '?');
//         };
//     }
// }

// // Storing a returned function
// var askQues = interviewQuestion('teacher');
// askQues('George');
// askQues = interviewQuestion('designer');
// askQues('Miriam');

// // Calling a returned function directly from a function
// interviewQuestion('mason')('Harold');








///////////////////////////////////////
// Lecture: Immediately Invoked Function Expressions (IIFE)

// // If our purpose was to hide the score variable from the outside by using this function,
// // this isn't actually the best way to do it. 
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// // We would instead use an IIFE.
// // We are essentially tricking the JS parser that function is a statement by wrapping it in 
// // parentheses (). Since this is not attached to a variable, we cannot access the score 
// // variable from the outside, thus creating data privacy.
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// //  - You can still pass parameters into the function. 
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(2);








///////////////////////////////////////
// Lecture: Closures

/*
    Principle of Closure:
        An inner function always has access to the variables and parameters of its outer function,
        even after the outer function has returned and finished execution. 

    When the execution context of a function is gone, ITS VARIABLE OBJECTS DON'T DISAPPEAR. 
    Therefore, inner functions get access to its scope, including the variables declared in
    its outer function. 
*/

// // Example of closure
// function retirement(retirementAge) {
//     var a = ' years left until retirement';

//     // Inner function is able to use 'a' and 'retirementAge' variables even after retirement function 
//     // has finished its execution. 
//     return function(yob) {
//         var age = new Date().getFullYear() - yob;
//         return (retirementAge - age) + a;
//     };
// }

// // Here, the current execution object has closed in on the outer variable object. 
// // Hence, creating a closure. 
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// console.log(retirementUS(1990));
// console.log(retirementGermany(1990));
// console.log(retirementIceland(1990));


// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log(name + ', what subject do you teach?');
//         } else {
//             console.log('Hello ' + name + ', what do you do as a ' + job + '?');
//         }
//     }
// }

// interviewQuestion('designer')('Tom');
// interviewQuestion('teacher')('Matthew');
// interviewQuestion('backend dev')('George');








///////////////////////////////////////
// Lecture: Bind, Call, Apply

// var john = {
//     name: 'John',
//     age: new Date().getFullYear() - 1990, 
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log(
//                 'Good ' + timeOfDay 
//                 + ', ladies and gentlemen. I\'m ' + this.name 
//                 + ', I\'m a ' + this.job 
//                 + ' and I\'m ' + this.age
//                 + ' years old.'
//             );
//         } else if (style === 'friendly') {
//             console.log(
//                 'Hey! What\'s up? I\'m ' + this.name 
//                 + ', I\'m a ' + this.job 
//                 + ' and I\'m ' + this.age
//                 + ' years old. Have a nice ' + timeOfDay + '!'
//             );
//         }
//     }
// };

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('friendly', 'morning');

// // How can we use the 'presentation' method 
// // Call method
// //  - Allows us to substitue one object for another in an object method
// //  - obj.method.call(this, methodArgs...)
// john.presentation.call(emily, 'friendly', 'afternoon');

// // Apply method
// //  - Very similar to call method EXCEPT the object method's arguments are passed into an array
// //  - obj.method.apply(this, [methodArgs...]))
// john.presentation.apply(emily, ['friendly', 'afternoon']); 

// // Bind method
// //  - Very similar to call method EXCEPT it binds the method to a variable including preset arguments
// //  - Method is not called immediately. Instead, the method is called like a function afterwards
// //      with the preset arguments. 
// //  - Any remaining arguments are passed in the created function
// //  - var = obj.method.bind(this, presetArgs...)
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('evening');


// // From a previous example
// var years = [ 1990, 1965, 1937, 2005, 1998 ];

// function arrayCalc(arr, fn) {
//     result = [];
    
//     for (let i = 0; i < arr.length; i ++) {
//         result.push(fn(arr[i]));
//     }

//     return result;
// }

// function calculateAge(el) {
//     return new Date().getFullYear() - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages)
// console.log(fullJapan);








///////////////////////////////////////
// CODING CHALLENGE 

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
    /**
     * @param {string} ques The question in string format
     * @param {string[]} answers The possible answers
     * @param {number} correctAns Position of the correct answer
     */
    var Question = function(ques, answers, correctAns) {
        this.ques = ques;
        this.answers = answers;
        this.correctAns = correctAns;
    };

    Question.prototype.ask = function() {
        console.log(this.ques);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        }
        this.userAns = prompt('Please enter your answer here (Refer to console for question).');
    };

    Question.prototype.checkAns = function() {
        if (this.userAns === 'exit') {
            return 'exit';
        }
        if (Number(this.userAns) === this.correctAns) {
            return 'Correct!';
        } else {
            return 'Oof. Wrong answer. The correct answer was:\n' + this.correctAns + '. ' + this.answers[this.correctAns];
        }
    };

    function runGame(questions) {
        let quesIndex = Math.floor(Math.random() * questionsArr.length);
        questions[quesIndex].ask();
        let result = questions[quesIndex].checkAns();

        console.log(result);
        showScore(keepScore(result), result);
        
        if (result === 'exit') { return -1; }
        return 0;
    }

    function checkScore() {
        let userScore = 0;

        return function(result) {
            if (result === 'Correct!') userScore++;

            return userScore;
        }
    }

    function showScore(score, result) {
        if (result === 'exit') {
            console.log('\nYour final score: ' + score);
        } else {
            console.log('\nCurrent score: ' + score);
        }
        console.log('\n-------------------------------------');
    }

    // Questions
    let q1 = new Question(
        'Is JS the best coding language ever?',
        [ 'No', 'Yes' ],
        1
    );
    let q2 = new Question(
        'Which is the biggest state by land area in the US?',
        [ 'California', 'New York', 'Texas', 'Alaska' ],
        3
    );
    let q3 = new Question(
        'What is the name of this course\'s teacher?',
        [ 'John', 'Mark', 'Jonas', 'Mike' ],
        2
    )

    let questionsArr = [ q1, q2, q3 ];

    let keepScore = checkScore();

    // Run game
    while (true) {
        if (runGame(questionsArr) === -1) break;
        wait(500);
    }

    function wait(ms) {
        console.log('Getting next question...');
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); } while (d2 - d < ms);
    }
})();





// https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up
