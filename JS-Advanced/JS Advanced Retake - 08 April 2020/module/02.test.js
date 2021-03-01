const repository = require('./02');
const { expect } = require("chai");

describe('text', () => {
    it('test', () => {
        expect(repository(1)).to.equal(1)
    })
});

