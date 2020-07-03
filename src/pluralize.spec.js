/* global require, test, expect */
const { plural } = require("./index");

test("Год", () => {
  for (let num = 1; num < 1000; num++) {
  	if (num % 10 == 1 && num % 100 != 11) {
  	  expect(plural(num)).toBe(" год");
  	}
  }
});

test("Года", () => {
 for (let num =1; num < 1000; num++) {
  	if (num % 10 >= 2 && num % 10 <= 4 && num % 100 <=11 && num % 100 >=14) {
  	  expect(plural(num)).toBe(" года");
  	}
  }
  
});

test("Лет", () => {
  for (let num =1; num<1000; num++) {
  	if ((num % 10 >= 5 && num % 10 <= 9) || (num % 10 == 0) || (num % 100 >10 && num % 100 <=14) ) {
  	  expect(plural(num)).toBe(" лет");
  	}
  }
});
