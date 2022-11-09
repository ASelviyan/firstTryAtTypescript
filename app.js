// A function that adds two numbers 
// adding these types next the arguments makes sure that the argement is a spacific type
// we do that so that the program doesnt get confused during develpment
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = 'Result is: ';
add(number1, number2, printResult, resultPhase);
