// 1.
var s = "";
for(var i = 10; i <= 20; i++) {
  s += i + " ";
}
console.log("1.", s);

// 2.
for (let k = 10; k <= 20; k++) {
    console.log("2. K: ", k**2);
    }

// 3.
for (let a = 1; a <= 10; a++) {
    console.log("3. A: ", a*7);
    }

// 4.
let sum = 0;
for (let b = 1; b <= 15; b++) {
    sum += b;
}
console.log("4.", sum);

// 5.
let mult = 1;
for (let c = 15; c <= 35; c++) {
    mult = mult * c;
}
console.log("5.", mult);

// 6.
let mean = 0;
for (let d = 1; d <= 500; d++) {
    mean += d;
}
console.log("6.", mean/500);

// 7.
let count = 0;
for (let e = 30; e <= 80; e++) {
    if (e % 2 === 0) {
        count += e;
    }
}
console.log("7.", count);

// 8.
for (let f = 100; f <= 200; f++) {
    if (f % 3 === 0) {
        console.log("8.", f);
    }
}

// 9.
let e = 8;
let j = 0;
let h = 0;
for (let g = 1; g <= e; g++) {
    if (e % g === 0) {
        console.log("9. ", g);
        if (g % 2 === 0) {
            j = g + j;
            }
        h++;
    } 
}

console.log ("9. a ", j);
console.log ("9. b ", h);

// 10.
for (let l = 1; l <= 10; l++) {
    for (let m = 0; m < 10; m++) {
        console.log("10. ", l*m);
        };    
}

