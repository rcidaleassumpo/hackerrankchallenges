let input = 4

function factorial(n){

    let array = []
    if(n == 0 || n == 1){
        return n
    }
    for(let i = 1;i<=n;i++){
        array.push(i)
    }
    return array.reduce((number1,number2) => number1*number2)
}

console.log(factorial(input))