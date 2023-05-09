function compare(string1, string2){
    
    
let x = string1.replace(/\s+/g, "").split("").sort().join("");  //had to use replace(/\s+/g, "") in order to remove the spaces between the strings so that they can be more similar
let y = string2.replace(/\s+/g, "").split("").sort().join("");

    
    return x === y;}

let anagram = compare("so dark the con of man", "madonna of the rocks");
console.log(anagram);

let anagram2 = compare("angel", "glean");
console.log(anagram2);

let anagram3 = compare("things are good", "dogs eat ants");
console.log(anagram3);