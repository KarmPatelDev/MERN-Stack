// const add = require("./oper");

// console.log(add(5, 5)); // for add method
// console.log(add); // for name variable


// for two methods simultanously
// const oper = require("./oper");

// console.log(oper.add1(5, 5));
// console.log(oper.sub2(15, 5));


// shortcut for above code with one method other
const {add, sub, name, mul} = require("./oper");
console.log(add(5, 5));
console.log(sub(15, 5));
console.log(mul(15, 5));
console.log(name);
