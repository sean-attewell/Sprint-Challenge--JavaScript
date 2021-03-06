# Sprint Challenge: JavaScript Fundamentals
<!-- edit -->
This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

.map() allocates memory and stores return values. .forEach() throws away return values and always returns undefined. 
.forEach() will allow a callback function to mutate the current array. map() will instead return a new array.


2. What is the difference between a function and a method?

‘Method’ is used to describe functions that are properties of an object that isn’t a global one.

3. What is closure?

A closure is a function having access to the parent scope, even after the parent function has closed.

4. Describe the four rules of the 'this' keyword.

1 - Window Binding: 'this' points at the window/console object when in the global scope.
2 - Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is 'this'.
3 - New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
4 - Explicit binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.

5. Why do we need super() in an extended class?

Because constructors in inheriting classes must call super() before using ‘this’ to create new attributes. Constructor functions of an inheriting classes are labelled with a special internal property [[ConstructorKind]]:"derived".

When a normal constructor runs, it creates an empty object as ‘this’ and continues with it. But when a derived constructor runs, it doesn’t do it. It expects the parent constructor to do this job. So if we’re making a constructor of our own, then we must call super, because otherwise the object with 'this' reference to it won’t be created. And we’ll get an error.


### Git Set up

* [X] Fork the project into your GitHub user account
* [X] Clone the forked project into a directory on your machine
* [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [X] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [X] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [X] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [X] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [X] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!