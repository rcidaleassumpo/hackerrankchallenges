const input = 6

function staircase(n) {
    let char = '#'
    let space= ' '
    for(let i=n-1;i>=0;i--){
        console.log(space.repeat(i) + char.repeat(n-i))
    }
}

console.log(staircase(input))