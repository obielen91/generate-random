function generateNumber (minNumber, maxNumber) {

    return(Math.floor(Math.random() * (maxNumber + 1 - minNumber) + minNumber));

}

function generateSymbol (symbolLength) {
    let charsList = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let result = '';

    for(let step = 0; step<symbolLength; step++) {
        result += charsList[Math.floor(Math.random() * charsList.length)];

        // charList.lenght bo startujemy od zera // max number =[charsList.length - 1 + 1]
        
    }

    return result;
}

function genearteArrayNumber(minNumber, maxNumber, arrayLength) {
    let exampleArray = [];

    for (let i=0; i<arrayLength; i++) {
        exampleArray.push(generateNumber(minNumber, maxNumber));

    
    }

    return exampleArray;


}

/////

module.exports = {
    generateNumber, // generateNumber: generateNumber
    generateSymbol,// generateSymbol: generateSymbol 
    genearteArrayNumber 
};