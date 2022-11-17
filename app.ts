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



//---------------------------------------------------------------------
//LITERAL TYPES
//below is a literal type: literal type is when you make a variable an exact value instead of a a specific type (string or number)
//so the literalType variable below can only be identified as the number 5 or 10 and no other number or type!
let literalType: 5 | 10 // <--- (this is how you make literal types)
//the code below has is having an error because typescript is telling the code that the literalType variable can only have the 5 or 10 variables assigned to it  
literalType = 6
//but this code doesn't have a problem because a 5 is being a assigned to it 
literalType = 5


