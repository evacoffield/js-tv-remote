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
    presses += word.length;

    const getRowsAndColumns = (character) => {
        const rowNumber = keyboard.findIndex((row) => row.includes(character));
        const columnNumber = keyboard[rowNumber].findIndex((item) => item === character);

        return [rowNumber, columnNumber];
    }

    characters.forEach(char => {
        //const currentRowNumber = getRowsAndColumns(currentCharacter)[0];
        //const currentColumnNumber = getRowsAndColumns(currentCharacter)[1];
      
        const [currentRowNumber, currentColumnNumber] = getRowsAndColumns(currentCharacter);

        //const nextRowNumber = getRowsAndColumns(char)[0];
        //const nextColumnNumber = getRowsAndColumns(char)[1];
      
        const [nextRowNumber, nextColumnNumber] = getRowsAndColumns(char);

        const horizontalMoves = Math.abs(nextColumnNumber - currentColumnNumber);
        const verticalMoves = Math.abs(nextRowNumber - currentRowNumber);

        presses = presses + horizontalMoves + verticalMoves;
        currentCharacter = char;
    });

    return presses;
}