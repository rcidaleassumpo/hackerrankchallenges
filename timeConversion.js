let input = '07:05:45PM'

function timeConversion(s) {

    let rule = s.charAt(s.length-2)

    if(rule == 'P'){
        return s.replace(s.slice(0,2), (parseInt(s.slice(0,2))+12).toString()).slice(0,-2)
    } else {
        return s.replace('AM', '')
    }
}

console.log(timeConversion(input))