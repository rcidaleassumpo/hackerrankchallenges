let input = [3,2,1,3]

function birthdayCakeCandles(ar) {


    console.log(ar.filter((item) => item == Math.max(...ar)).length)

}

console.log(birthdayCakeCandles(input))