var tvRemote = function (word) {
    const keyboard = [
        ["a", "b", "c", "d", "e", "1", "2", "3"],
        ["f", "g", "h", "i", "j", "4", "5", "6"],
        ["k", "l", "m", "n", "o", "7", "8", "9"],
        ["p", "q", "r", "s", "t", ".", "@", "0"],
        ["u", "v", "w", "x", "y", "z", "_", "/"]
    ];

    const getRowsAndColumns = (character) => {
        const rowNumber = keyboard.findIndex((row) => row.includes(character));
        const columnNumber = keyboard[rowNumber].findIndex((item) => item === character);

        return [rowNumber, columnNumber];
    }

    let currentCharacter = 'a';
    let [currentRowNumber, currentColumnNumber] = getRowsAndColumns(currentCharacter);
    const characters = word.split('');
    console.log(characters);
    let presses = word.length;

    characters.forEach(char => {
        const [nextRowNumber, nextColumnNumber] = getRowsAndColumns(char);

        const horizontalMoves = Math.abs(nextColumnNumber - currentColumnNumber);
        const verticalMoves = Math.abs(nextRowNumber - currentRowNumber);

        presses += horizontalMoves + verticalMoves;
        currentRowNumber = nextRowNumber;
        currentColumnNumber = nextColumnNumber;
    });

    return presses;
}