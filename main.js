function oddoreven(num) {

    const digit_values = [];
    let sum = 0;

    const digit_num = num.toString().length;

    for (let i = digit_num; i > 0; i--) {
        const value = ((num % Math.pow(10, i)) - (num % Math.pow(10, i-1))) / Math.pow(10, i-1);
        digit_values.push(value);
    }

    for (let i = 0; i < digit_values.length; i++) {
        sum += digit_values[i];
    }

    const param = sum % 2;


    if (param == 0) {
        return "Even";
    }

    else if (param == 1) {
        return "Odd";
    }
    
}

console.log(oddoreven(43))