const HST = require("../public/HST");
let oHst = new HST();

it("tests for Ontario HST", ()=>{
    expect(oHst.calculate(10, "ON")).toBe(1.3);
});

it("tests for British Columbia HST", ()=>{
    expect(oHst.calculate(10, "BC")).toBe(1.2);
});

it("tests for Manitoba HST", () =>{
    expect(oHst.calculate(10, "MB")).toBe(1.3);
});