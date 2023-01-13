const validName=function(name){
    let nameRegex=/^[a-zA-z]*$/
    return nameRegex.test(name)
}

const validNumber =function(number){
    let numberRegex=/^[0]?[6789]\d{9}$/
    return numberRegex.test(number)
}

module.exports={validName,validNumber}