
function isNumber(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

// 1. Area of circle
function calculateArea (r) {
    π = 3.14;
    if (isNumber(r)) {
        return π * r ** 2;
    }
    return "Invalid arguments!";
}
const a = calculateArea (3);
console.log ("Area", a);

// 2. Circumference

function calculateCircumference (r) {
    π = 3.14;
    if (isNumber(r)) {
        return 2 * π * r;
    }
    return "Invalid arguments!";
}
const b = calculateCircumference (4);
console.log ("Circumference", b);

// 3. Arithmetic mean

function calculateArithmeticMean (x, y) {
    if (isNumber(x) && isNumber(y)) {
        return (x + y) /2;
    }
    return "Invalid arguments!";
}
const c = calculateArithmeticMean (5, 10);
console.log ("Arithmetic mean", c);

// 4. Calc function

