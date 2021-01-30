function solve() {
    let el1;
    let el2;
    let result;
    return {
        init: (selector1, selector2, resultSelector) => {
             el1 = document.querySelector(selector1)
             el2 = document.querySelector(selector2);
             result = document.querySelector(resultSelector);
        },
        add: () => {
            result.value = Number(el1.value) + Number(el2.value);
        },
        subtract: () => {
            result.value = Number(el1.value) - Number(el2.value);
        }
    }
}
let obj = solve();
obj.init('#num1', '#num2', '#result');
let add = obj.add;
let subtract = obj.subtract;
