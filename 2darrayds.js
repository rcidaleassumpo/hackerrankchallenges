/* const input = ['0 -4 -6 0 -7 -6', '-1 -2 -6 -8 -3 -1', 
                '-8 -4 -2 -8 -8 -6', 
                '-3 -1 -2 -5 -7 -4', 
                '-3 -5 -3 -6 -6 -6', '-3 -6 0 -8 -6 -7']

let newInput = input.map((el) => el.split(' ').map((el) => parseInt(el)))

totalRange = newInput.map(item => item.length).reduce((item1,item2) => item1+item2, 0)

arrAnswer = []

for(let line in newInput){
    for (row in newInput){
        newRow = parseInt(row)
        newLine = parseInt(line)
        if(newLine < 4){
            let a =newInput[newLine +0][newRow]
            let b =newInput[newLine +0][newRow+1]
            let c =newInput[newLine +0][newRow+2]
            let d =newInput[newLine +1][newRow+1]
            let e =newInput[newLine +2][newRow]
            let f =newInput[newLine +2][newRow+1]
            let g =newInput[newLine +2][newRow+2]
            if(a,b,c,d,e,f,g == undefined){
                break
            }
            arrAnswer.push([a,b,c,d,e,f,g].reduce((item1,item2)=> item1 + item2, 0))
        }
    }
}
console.log(arrAnswer)
let answer = arrAnswer.reduce((item1, item2) => (item1 > item2 ) ? item1: item2)


console.log(answer)


 */


/* let string = 'abadckdfadasfcdcdaascdcdcdcd'
let pattern = 'cd'
let count = 0

function findMax(mystring, mypattern){
    const mypatternLenght = mypattern.length
    let startOfSearch = mystring.search(mypattern);
    let copyOfMystring = [...mystring]
    if(startOfSearch > 0){
        copyOfMystring.splice(startOfSearch, mypatternLenght)
        newString = copyOfMystring.join('')
        count = count + 1
        findMax(newString, mypattern)
    } 
    return count


}

let a = findMax(string,pattern)

console.log(a) */


//Diagonal Difference 

/* const input =  ['6 6 7 -10 9 -3 8 9 -1',
'9 7 -10 6 4 1 6 1 1',
'-1 -2 4 -6 1 -4 -6 3 9',
 '-8 7 6 -1 -6 -6 6 -7 2',
 '-10 -4 9 1 -7 8 -5 3 -5',
 '-8 -3 -4 2 -3 7 -5 1 -5',
 '-2 -7 -4 8 3 -1 8 2 3',
 '-3 4 6 -7 -7 -8 -3 9 -6',
 '-2 0 5 4 4 4 -3 3 0']
 */

/* const newInput = input.map((arr) => {
    return arr.split(' ').map((item)=>parseInt(item))
})

console.log(newInput)

function sumArr(arr){
    return arr.reduce((item1,item2) => item1+item2)
}

function diagonalDifference(arr) {
    
    let lefDiagonalArray = []
    let rightDiagonalArray = []
    
    for(let i=0;i<arr.length;i++){
        rightDiagonalArray.push(arr[i][Math.abs(i-arr.length)-1])
        lefDiagonalArray.push(arr[i][i])
    }
    let result = sumArr(lefDiagonalArray) - sumArr(rightDiagonalArray)
   
    if(result > 0){
        return -Math.abs(result)
    }
    return result
}

console.log(diagonalDifference(newInput)) */


/* let input = ['-4 3 -9 0 4 1']
input = input[0].split(' ').map(item => parseInt(item))

function plusMinus(arr) {
    const arrLenght = arr.length
    let positiveNumbers = [] 
    let zeroNumbers = []
    let negativeNumbers = []

    arr.forEach(item => {
        if(Math.sign(item) === 1){

            positiveNumbers.push(item)
        } else if(Math.sign(item) === -1){
            negativeNumbers.push(item)
        } else {
            zeroNumbers.push(item)
        }
    })

    
    
    console.log((positiveNumbers.length/arrLenght).toFixed(6))
    console.log((zeroNumbers.length/arrLenght).toFixed(6))
    console.log((negativeNumbers.length/arrLenght).toFixed(6))

}

console.log(plusMinus(input)) */
