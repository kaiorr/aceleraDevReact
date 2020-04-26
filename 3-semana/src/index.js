'use strict'

const fibonacci = (qtd = 350) => {
    const numeros = Array.from(Array(qtd + 1).keys());
    const result = [0, 1];
    let index = 1;
    numeros.forEach(item => {
        if ((result[index - 1] + result[index]) === item) {
            result.push(item);
            index++;
        }
    })
    return result;
}

const isFibonnaci = (num) => {
    const result = fibonacci(num + 1);
    return result.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}