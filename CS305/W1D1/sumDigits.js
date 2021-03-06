
function sumDigits(number){
    let sum = 0;
    while (number >= 1){
        let lastDigit = parseInt(number%10);
        sum += lastDigit;
        number = parseInt(number/10);
    }
    return sum;
};

function multDigits(number){
        let product = 1;
        while (number >= 1){
            let lastDigit = parseInt(number%10);
            product *= lastDigit;
            number = parseInt(number/10);
        }
        return product;
    };

    console.log(sumDigits(1234));
    console.log(sumDigits(102));
    console.log(sumDigits(8));

    console.log(multDigits(1234));
    console.log(multDigits(102));
    console.log(multDigits(8));
