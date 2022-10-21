console.log('if statement')

if(5 === '5'){
    console.log('pack out')
}else{
    console.log('Stay in the house')
}

console.log('if...elseif...else')

if(5 === '5'){
    console.log('Stay in the house')
} else if (5 === 6){
    console.log('Stay in the house for a period')
} else {
    console.log('Pack out')
}

console.log('Nested if')

/**if(5 !== '5'){
    if(5 === '5'){
        console.log('Give grace')
    }else{
        console.log('Pack out')
    }else{
        console.log('Stay')
    }
}*/

//switch Statement

var parameter = 5
switch(parameter){
    case '5':
    console.log('first case');
    break;
    case 5:
    console.log('second case');
    break;
    default:
        console.log('If any of them nor run');
        break;
}

//condition ? true_result : false_result; tenary operator

var paidRent = true;

paidRent ? console.log('stay in the house') : console.log('Pack out of the house');

var numb = 6;

if(numb % 2 == 0){
    console.log('This is an even number')
}else{
    console.log('This is an odd number')
}



var a =80;
if(a>=70){
    console.log('Your grade is A')
}else if(a>=60 && a<=70){
    console.log('Your grade is B')
}else if(a>=50 && a<=64){
    console.log('Your grade is C')
}else if(a<=50 && a>=45){
    console.log('Your grade is D')
}else{
    console.log('Your grade is F. Please Repeat!')
}


