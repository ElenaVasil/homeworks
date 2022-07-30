"use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = (b**2 - 4*a*c);
  let sqr1;
  let sqr2;
  if (d > 0) { 
    sqr1 = (-b + Math.sqrt(d)) / (2 * a);
    sqr2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [sqr1, sqr2];
  } else if (d === 0) {
    sqr1 = -b/(2*a);
    arr = [sqr1];
  } else {
    arr = [];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
