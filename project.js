//1. deposet some of money
//2. Determine numer of lines to bet on
//3. Collect a bet amount
//4. spin the slot machine
//5. check if the user won
//6. give the user thier their winnings
//7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalide depost amount, try again. ");
        } else {
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalide number of lines, try again. ");
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter bet per line: ");
        const numberBet = parseFloat(bet);
        
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalide bet, try again. ");
        } else {
            return numberBet;
        }
    }
}


let balance = deposit();
const numberofLines = getNumberOfLines();
const getbet = getBet(balance, numberofLines);

console.log(numberofLines, getbet);