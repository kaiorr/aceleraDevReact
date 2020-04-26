const { expect } = require('chai');
const { fibonacci, isFibonnaci } = require('../src');

describe('fibonacci', () => {
    it('should get fibonacci sequence until it passes 350', () => {
        const result = fibonacci();
        expect(result).to.be.an('array');
    });
});

describe('isFibonacci', () => {
    it('should return true when the number is a fibonacci', () => {
        const result = isFibonnaci(5)
        expect(result).to.be.true;
    });

    it('should return false when the number isn\'t a fibonacci', () => {
        const result = isFibonnaci(4)
        expect(result).to.be.false;
    });
});