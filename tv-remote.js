var tvRemote = function (word) {
    const keyboard = [
        ["a", "b", "c", "d", "e", "1", "2", "3"],
        ["f", "g", "h", "i", "j", "4", "5", "6"],
        ["k", "l", "m", "n", "o", "7", "8", "9"],
        ["p", "q", "r", "s", "t", ".", "@", "0"],
        ["u", "v", "w", "x", "y", "z", "_", "/"]
    ];

    let currentCharacter = 'a';
    const characters = word.split('');
    console.log(characters);
    let presses = 0;
    presses = presses + word.length; //presses += word.length

    characters.forEach(char => {
        //Get the starting point, row number and column number
        const currentRowNumber = keyboard.findIndex((row) => row.includes(currentCharacter));
        const currentColumnNumber = keyboard[currentRowNumber].findIndex((item) => item === currentCharacter);

        //Get the next character, row and column count
        const nextRowNumber = keyboard.findIndex((row) => row.includes(char));
        const nextColumnNumber = keyboard[nextRowNumber].findIndex((item) => item === char);
        //console.log([nextRowNumber, nextColumnNumber]);

        //Get the horizontal distance - Use Math.abs to alwasy make them positive values
        const horizontalMoves = Math.abs(nextColumnNumber - currentColumnNumber);

        //Get the vertical distance - Use Math.abs to alwasy make them positive values
        const verticalMoves = Math.abs(nextRowNumber - currentRowNumber);

        console.log([horizontalMoves, verticalMoves]);

        //Add the together
        const totalMoves = horizontalMoves + verticalMoves;

        //Add them to the presses
        presses = presses + totalMoves;

        //Reassign current character to char
        currentCharacter = char;
    });

    return presses;
}