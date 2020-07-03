

function plural (age) {
    let word;
    if ( age % 100 >= 11 && age % 100 <= 19 || age % 10 ==0 || age % 10 >=5){
        word = " лет";
    } else if ( age % 10 == 1 ) {
        word = " год";
    } else {
            word = " года";
    }
    return word       
}


        

module.exports = { plural };