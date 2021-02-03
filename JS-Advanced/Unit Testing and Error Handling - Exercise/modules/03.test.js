const lookupChar= require("./03");
const { expect } = require("chai");

describe('Test', () => {
    it('checking for first parameter', () => {
        expect(lookupChar(123, 1)).to.equal(undefined);
    });
    it('checking for second parameter', () => {
        expect(lookupChar('string', 'asd')).to.equal(undefined);
    });
    it('checking for both params', () => {
        expect(lookupChar(123, 'sad')).to.equal(undefined);
    });
    it('checking length > string length', () => {
        expect(lookupChar('string', 10)).to.equal("Incorrect index");
    });
    it('checking length = string length', () => {
        expect(lookupChar('string', 6)).to.equal("Incorrect index");
    });
    it('checking length < 0', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index");
    });
    it('checking float index', () => {
        expect(lookupChar('string', 1.3)).to.equal(undefined);
    });
    it('return char at index', () => {
        expect(lookupChar('string', 3)).to.equal('i');
    });        
});
