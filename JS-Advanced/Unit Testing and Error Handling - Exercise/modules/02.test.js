const isOddOrEven = require("./02");
const { expect } = require("chai");

describe("Test", () => {
  it("is not a string", () => {
    expect(isOddOrEven(5)).to.equal(undefined);
  });
  it("is a string", () => {
    expect(isOddOrEven(false)).to.equal(undefined);
  });
  it("is even", () => {
    expect(isOddOrEven("thre")).to.equal("even");
  });
  it("is odd", () => {
    expect(isOddOrEven("thr")).to.equal("odd");
  });
});
