// A function that adds two numbers 
// adding these types next the arguments makes sure that the argument is a specific type
// we do that so that the program doesn't get confused during development
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     if(showResult) {
//         console.log(phrase + (n1 + n2))
//     }
//     return n1 + n2
// }
//You can assigned a variable a type(number) so that typescript will know what value will eventually be there
var futureNumber;
futureNumber = 5;
//below is a literal type: literal type is when you make a variable an exact value instead of a a specific type (string or number)
//so the number1 variable below can only be identified as the number 5 and no other number or type!
//if there is a if statement asking 
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = 'Result is: ';
var literalType;
literalType = 5;
// add(number1, number2, printResult, resultPhase)
if (typeof literalType === 'number') {
    console.log('true!');
}
