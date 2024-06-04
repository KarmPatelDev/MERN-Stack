
const add = (a, b) => {
    return (a + b);
};

const sub = (a, b) => {
    return (a - b);
};

const mul = (a, b) => {
    return (a * b);
};

const name = "Karm";

// module.exports = add;
// module.exports = name;

// module.exports.add1 = add;
// module.exports.sub2 = sub;
// module.exports.mul3 = mul;

// shortcut for above method
module.exports = {add, sub, mul, name};