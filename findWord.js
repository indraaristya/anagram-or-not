// Original Code
function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr( indexFirstBracketFound );
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0){
                    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound); 
                } else {
                    return '';
                }
            } else {
                return '';
            }
        } else {
            return '';
        }
    } else {
        return '';
    }
}

// Refactored Code
function firstStringInBracket(sentence) {
    if (sentence.length > 0) {
        const openBracket = sentence.indexOf("(");
        if (openBracket > -1) {
            const closeBracket = sentence.indexOf(")");
            if (closeBracket > -1) {
                if (closeBracket - openBracket == 1) {
                    return `No words between 2 brackets in ${sentence}.`
                }
                return sentence.substring(openBracket + 1, closeBracket);
            }
            return `No close bracket in "${sentence}".`
        }
        return `No open bracket in "${sentence}".`
    }
    return "Please input a valid sentence."
}

// Other way of refactored Code
function firstStringInBracket2(sentence) {
    if (sentence.length > 0) {
        const openBracket = sentence.indexOf("(");
        const closeBracket = sentence.indexOf(")");
        if (openBracket > -1 && closeBracket > -1) {
            if (closeBracket - openBracket == 1) {
                return `No words between 2 brackets in ${sentence}.`
            }
            return sentence.substring(openBracket + 1, closeBracket);
        }
        return `No open/close bracket in "${sentence}".`
    }
    return "Please input a valid sentence."
}

console.log(findFirstStringInBracket("((a))"))
console.log(firstStringInBracket("((a))"))
console.log(firstStringInBracket2("((a))"))