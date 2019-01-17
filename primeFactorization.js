document.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === 13) {

        let inputValue = parseInt(document.getElementById("integerInput").value);
        document.getElementById("answerGoesHere").innerHTML = "";

        function primeFactorization(integer) {
            let arrayOfPrimeFactors = [];

            integerValidator(integer);

            function integerValidator(integer) {
                let arrayOfImproperValues = [{
                        condition: (typeof integer !== "number"),
                        message: integer + " is not a number."
                    },
                    {
                        condition: (isNaN(inputValue) === true),
                        message: "Please enter a number."
                    },
                    {
                        condition: (integer > Math.pow(2, 30)),
                        message: "This number is too big. It will likely crash your browser. Please enter a number between 2 and 1,073,741,824."
                    },
                    {
                        condition: ((integer === Infinity) || ((integer === NaN))),
                        message: "Infinity and NaN are not permitted."
                    },
                    {
                        condition: (integer === 1),
                        message: "The number " + 1 + " is neither composite nor prime."
                    },
                    {
                        condition: (integer === 0),
                        message: "Do not use zero with this function."
                    },
                    {
                        condition: (integer < 0),
                        message: "The integer must be positive"
                    },
                    {
                        condition: (integer % 1 !== 0),
                        message: "Floating point numbers (e.g. 1.2, 3.14159) and are not permitted."
                    }
                ];
                for (let i = 0; i < arrayOfImproperValues.length; i++) {
                    if (arrayOfImproperValues[i].condition === true) {
                        document.getElementById("answerGoesHere").innerHTML = arrayOfImproperValues[i].message;
                        console.error(arrayOfImproperValues[i].message);
                        return;
                    }
                }
                factorFunction(integer, true);
            };

            function factorFunction(numberCurrentlyBeingFactored, firstTime) {
                let factorArray = [];
                for (let i = 1; i <= numberCurrentlyBeingFactored; i++) {
                    if (numberCurrentlyBeingFactored % i === 0) {
                        factorArray.push(i);
                    }
                }
                if (factorArray.length === 2) {
                    if (firstTime === true) {
                        let primeNumberMessage = (numberCurrentlyBeingFactored + " is a prime integer. Its only factors are 1 and itself");
                        document.getElementById("answerGoesHere").innerHTML = primeNumberMessage;
                        return;
                    } else if (firstTime === false) {
                        arrayOfPrimeFactors.push(numberCurrentlyBeingFactored);
                        tallyUpPrimeFactors(arrayOfPrimeFactors);
                    }
                } else if (factorArray.length > 2) {
                    factorArray = [];
                    let newNumber;
                    for (let j = 2; j < numberCurrentlyBeingFactored; j++) {
                        if (numberCurrentlyBeingFactored % j === 0) {
                            arrayOfPrimeFactors.push(j);
                            newNumber = (numberCurrentlyBeingFactored / j);
                            break;
                        }
                    }
                    factorFunction(newNumber, false);
                }
            }

            function tallyUpPrimeFactors(arrayOfPrimeFactors) {
                let arrayOfPrimeOccurences = [];
                for (let i = 0; i < arrayOfPrimeFactors.length; i++) {
                    let primeNumberObject = {
                        number: arrayOfPrimeFactors[i],
                        occurences: 0
                    }
                    for (let j = 0; j < arrayOfPrimeFactors.length; j++) {
                        if (arrayOfPrimeFactors[i] === arrayOfPrimeFactors[j]) {
                            primeNumberObject.occurences++;
                        }
                    }
                    arrayOfPrimeOccurences.push(primeNumberObject);
                    arrayOfPrimeFactors.splice((i + 1), (primeNumberObject.occurences - 1));
                }
                displayResults(arrayOfPrimeOccurences);
            }

            function displayResults(arrayOfPrimeOccurences) {

                let answer = "The prime factorization of <b>" + integer + "</b> is ";

                for (let i = 0; i < arrayOfPrimeOccurences.length; i++) {
                    answer += "<b>" + arrayOfPrimeOccurences[i].number + "</b>";
                    if (arrayOfPrimeOccurences[i].occurences > 1) {
                        answer += "<b><sup>" + arrayOfPrimeOccurences[i].occurences + "</sup></b>";
                    }
                    if (i === (arrayOfPrimeOccurences.length - 1)) {
                        answer += ". ";
                    } else {
                        answer += " x ";
                    }
                }
                let largestPrime = arrayOfPrimeOccurences[arrayOfPrimeOccurences.length - 1].number;
                let largestPrimeAnswer = "The largest prime factor is <b>" + largestPrime + "</b>."
                document.getElementById("answerGoesHere").innerHTML = answer + largestPrimeAnswer;
                return;
            }
        }
        primeFactorization(inputValue);
        document.getElementById("integerInput").value = "";
    }
});