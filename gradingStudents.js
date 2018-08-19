let input = [ 73, 67, 38, 33 ]

function gradingStudents(grades) {
    
    let results = grades.map((grade) => {
        if(grade > 37){
            let roundFive = Math.ceil(grade/5)*5
            return (roundFive - grade < 3)? roundFive: grade 
        } return grade
    })
    results.forEach(grade => console.log(grade))
}

console.log(gradingStudents(input))