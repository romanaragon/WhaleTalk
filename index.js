/*This is the text we would like to translate into whale*/
let input = 'My name is Dory and this is Nemo. What is your name?';

/*whales only speak in vowels so this is an array of vowels that will be extracted 
from the input variable. Whales do not consider y a vowel.*/
const vowels = ['A', 'E', 'I', 'O', 'U'];

//this is where we will store the extracted vowels from the input array
let resultArray = [];

/*this loop will iterate through each letter of the array, compare the letters in the input array to the vowel list and push it to
the resultArray. It will also double the e's and u's since whale language does that. it also converts the input to all upper case 
for comparison purposes. */
for(let i = 0; i  < input.length; i++){
    for(let j = 0; j < vowels.length; j++){
        input = input.toUpperCase();
        if(input[i] === vowels[j]){
            resultArray.push(input[i]);
        }
    } if(input[i] === 'E'){
        resultArray.push(input[i]);
    } if(input[i] === 'U'){
        resultArray.push(input[i]);
    }
}

/*logging to the console the concatanated elements in the array*/
console.log(resultArray.join(''));



