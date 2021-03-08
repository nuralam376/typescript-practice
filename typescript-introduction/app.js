var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var btn = document.querySelector("#btn");
function printResult(num1, num2) {
    return num1 + num2;
}
var results = [];
btn.addEventListener("click", function () {
    var a = +num1.value;
    var b = +num2.value;
    var result = printResult(a, b);
    var resultContainer = {
        res: result,
        print: function () {
            console.log("" + this.res);
        }
    };
    results.push(resultContainer);
    //   results.push(3);
});
