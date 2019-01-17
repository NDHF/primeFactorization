# primeFactorization
A function that lists all prime factors of a number

1. Overview

This function will list all prime factors for an integer, and how many times each factor appears.

This function re-uses a fair amount of code from an earlier project, https://github.com/NDHF/biggestPrimeFactor, plus its HTML page and stylesheet. 

* The function only works for positive whole integers greater than one. 
* The user input is first fed into a validator function, which will try to filter out bad inputs.
* The validator feeds the input into a factoring function. This function uses recursion to break the integer down into its prime factors. 

Each time a prime factor is found, it is pushed into an array. 

For example, if the input is 24, the resulting factor array will be [2, 2, 3].

If the initial integer is prime, the function will say so, and end early. 

* The array of factors is fed into a "tally" function which organizes each factor. This function creates a new array, which records each factor, and counts how many times it appears. 

* The new array is fed into a function that displays the results in HTML format. 

Logically, the last factor in the new array will be the largest prime factor. This information is also displayed to the user. 

2. Design Philosophies

I tried to uphold three principles in designing this function. First, user input is evil. Second, global variables are evil. Third, make code self-documenting when possible. 

I have tried to establish a very clear flow of data. One function flows directly into the next.

* User Input

The input for this function must be a positive, whole integer greater than one. Validating input as a number can be challenging in JavaScript, so I came up with two solutions. First, I made a very simple input validation function, which will catch quite a few, but not all, harmful inputs. Second, input is done via an HTML number-type input element. This simple element can do the validation work for you. 

* A word on input validation, or, "NaN violence"

It is best to use these two methods together. Using an HTML number input helps restrict user input, but will not solve all problems. The value of the input will be a string, and must be parsed into an integer. An empty input will produce NaN. To address these matters, extra input validation is required. I have added in more validation, just to be safe.

* Global Variables

Input is limited to typing in a number and hitting "enter". This allowed me to put all the code inside a single event listener. No global variables, and no global functions. 


