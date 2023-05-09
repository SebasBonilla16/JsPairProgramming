function vowelChecker(letter){
    const vowels = ["a", "e", "i", "o", "u"]; //Write out vowels


if(vowels.includes(letter)){    //Check to see if vowel is included in letter
    console.log(`${letter} is a vowel`);
    } else {
        console.log(`${letter} is not a vowel`);
    }
}

vowelChecker("b");