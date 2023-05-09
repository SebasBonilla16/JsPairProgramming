var mixedNums = [2, 4, 7, 11, 15, 16],
    evenNums =[],
    oddNums =[];

    for ( var i=0; i<mixedNums.length; i++){ //.length to read through length of array
    if (mixedNums[i] % 2 === 0){  // use modulus operator to determine if even and push if there is a remainder the numb is odd
        evenNums.push(mixedNums[i]);
    } 
    else{
        oddNums.push(mixedNums[i]);
    }
}

console.log(evenNums, oddNums);