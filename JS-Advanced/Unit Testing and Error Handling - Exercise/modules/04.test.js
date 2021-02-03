const mathEnforcer = require("./04");
const { expect } = require("chai");

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('checking for param is NAN', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('checking for param is number and add five to it', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('checking for param is number and add five to it', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        });
        it('checking for param is number and add five to it', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });
    describe('subtractTen', () => {
        it('checking for first param is NAN', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it('checking for first param is number and subtract ten to it', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('checking for first param is number and subtract ten to it', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
        it('checking for first param is number and subtract ten to it', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
    });
    describe('sum', () => {
        it('checking for first param is NAN', () => {
            expect(mathEnforcer.sum('5', 1)).to.equal(undefined);
        });
        it('checking for both params', () => {
            expect(mathEnforcer.sum('5', '1')).to.equal(undefined);
        });
        it('checking for second param is NAN', () => {
            expect(mathEnforcer.sum(1, '5')).to.equal(undefined);
        });
        it('checking for first param is number and sum', () => {
            expect(mathEnforcer.sum(20, 10)).to.equal(30);
        });
        it('checking for first param is number and sum', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
        it('checking for first param is number and sum', () => {
            expect(mathEnforcer.sum(3, 2)).to.equal(5);
        });
    });
     
});
