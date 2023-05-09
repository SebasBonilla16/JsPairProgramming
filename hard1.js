function hasMatchingBrackets (string){
    const brackets = {"{":"}", "[":"]", "(":")"};
    let matching = "";

    for(let i=0; i<string.length; i++){
        const value = string[i];
        if (brackets[value]){
            matching += brackets[value];
        } else if (value === "}" || value === "]" || value === ")"){
            if (value !== matching.slice(-1)){
                return false;
            }
            matching = matching.slice(0, -1);
        }
    }
    return matching.length === 0;
}

let string1 = "{hello world}";
hasMatchingBrackets(string1);