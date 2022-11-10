// A function that adds two numbers 
// adding these types next the arguments makes sure that the argument is a specific type
// we do that so that the program doesn't get confused during development
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if(showResult) {
        console.log(phrase + (n1 + n2))
    }
    return n1 + n2
}
//You can assigned a variable a type(number) so that typescript will know what value will eventually be there
let futureNumber: number;
futureNumber = 5;


const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = 'Result is: ';

add(number1, number2, printResult, resultPhase)
