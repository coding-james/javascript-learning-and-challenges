const { expect, assert } = require("chai");
const domainName = require("../../../Codewars/5 kyu/domain_name");

// CODEWARS: Extract the domain name from a URL
describe("Extract the domain name from a URL Tests", () => {
    const tests = [
        { arg: "http://google.com", expected: "google" },
        { arg: "http://google.co.jp", expected: "google" },
        { arg: "https://youtube.com", expected: "youtube" },
        { arg: "https://github.com/marketplace", expected: "github" },
        { arg: "https://www.techradar.com/news/mobile-computing/laptops/best-laptops-1304361", expected: "techradar" },
        { arg: "https://www.cnet.com", expected: "cnet" },
        { arg: "bbc.co.uk", expected: "bbc" },
    ];

    tests.forEach(({ arg, expected }) => {
        const result = domainName(arg);

        it(`DATATYPE: It should return a String`, () => {
            assert.isString(result);
        });

        it(`should return ${expected}`, () => {
            expect(result).to.equal(expected);
        });
    });
});