function checkWordLength(stringA, stringB) {
    if (stringA.length == stringB.length) {
        return true
    } 
    return false
}

function checkFrequent(stringA, stringB) {
    let freqA = {}
    let freqB = {}
    for (let i=0; i < stringA.length; i++) {
        freqA[stringA[i]] = freqA[stringA[i]] ? freqA[stringA[i]] + 1 : 1
        freqB[stringB[i]] = freqB[stringB[i]] ? freqB[stringB[i]] + 1 : 1
    }
    const keyA = Object.keys(freqA).sort()
    const keyB = Object.keys(freqB).sort()
    if (keyA.length == keyB.length) {
        if (JSON.stringify(keyA) == JSON.stringify(keyB)) {
            for (const key in freqA) {
                if (freqA[key] !== freqB[key]) {
                    return false
                }
            }
            return true
        } 
        return false
    }
}

function anagramOrNot(stringA, stringB) {
    const wordA = stringA.split(" ").join("").toLowerCase()
    const wordB = stringB.split(" ").join("").toLowerCase()
    if (checkWordLength(wordA, wordB)) {
        if (checkFrequent(wordA, wordB)) {
            return true
        }
        return false
    }
    return false
}

function main(setsOfString) {
    let anagramSet = []
    let indexAnagram = []
    for (let i=0; i<setsOfString.length; i++) {
        if (!indexAnagram.includes(i)) {
            let sets = [ setsOfString[i] ];
            indexAnagram.push(i);
            for (let j=i+1; j<setsOfString.length; j++) {
                if (!indexAnagram.includes(j) && anagramOrNot(setsOfString[i], setsOfString[j])) {
                    sets.push(setsOfString[j]);
                    indexAnagram.push(j);
                }
            }
            anagramSet.push(sets);
            sets = []
        }
    }
    console.log(anagramSet);
}

main(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua', '0909', '9090', 'kau makan', 'nkkauaam'])