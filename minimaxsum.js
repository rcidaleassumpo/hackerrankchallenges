let input = [ 1, 2, 3, 4, 5 ]

function miniMaxSum(arr) {

    let sortedArray = arr.sort()

    let miniArray = [...sortedArray].splice(0, arr.length-1)
    let maxArray = [...sortedArray].splice(1)
    console.log(miniArray.reduce((item1,item2) => item1+item2),maxArray.reduce((item1,item2) => item1+item2))
}

console.log(miniMaxSum(input))