var numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    primeArray = [];

    numbArray = numbArray.filter((number) => { // Use .filter to filter prime numbers through array
        for (var i = 2; i<= Math.sqrt(number); i++){  //Use Math.sqrt method to run through every number to determine if number is prime or not
            if (number % i ===0) return false;
        } 
        return true;
    });

    console.log(numbArray)
