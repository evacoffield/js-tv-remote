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

    characters.forEach(char => {
        const currentRowNumber = keyboard.findIndex((row) => row.includes(currentCharacter));
        const currentColumnNumber = keyboard[currentRowNumber].findIndex((item) => item === currentCharacter);

        const nextRowNumber = keyboard.findIndex((row) => row.includes(char));
        const nextColumnNumber = keyboard[nextRowNumber].findIndex((item) => item === char);

        const horizontalMoves = Math.abs(nextColumnNumber - currentColumnNumber);
        const verticalMoves = Math.abs(nextRowNumber - currentRowNumber);

        presses = presses + horizontalMoves + verticalMoves;
        currentCharacter = char;
    });

    return presses;
}