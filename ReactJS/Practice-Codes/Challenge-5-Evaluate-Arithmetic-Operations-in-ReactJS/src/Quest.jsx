import React from "react";

function Quest() {
  return <h1>Hello Children</h1>;
}

function Sum(a, b) {
  let sum = a + b;
  return sum;
}

function Sub(a, b) {
  let sub = a - b;
  return sub;
}

function Mul(a, b) {
  let Mul = a * b;
  return Mul;
}

function Div(a, b) {
  let Div = a / b;
  return Div;
}

export default Quest;
export { Sum, Sub, Mul, Div };