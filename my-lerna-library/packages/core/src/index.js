"use strict";

import * as constants from './constants.js';

const { magicNumber } = constants;

console.info('index.js from core was loaded!');

let anotherPackage;
try {
  anotherPackage = require('@my-lerna-library/another-package');
} catch(error) {
  console.error(error);
}

class Test {
  constructor() {
  }
  test() {
    return `hello from main endpoint ${magicNumber}`;
  }
  testFromAnotherPackage() {
    console.info("call to testFromAnotherPackage", anotherPackage);
    if (anotherPackage) {
      return new anotherPackage.AnotherClass().test();
    }
    return "Another package not loaded";
  }
  iconFromAnotherPackage() {
    if (anotherPackage) {
      return anotherPackage.logo;
    }
  }
  bigSVGFromAnotherPackage() {
    if (anotherPackage) {
      return anotherPackage.bigSVG;
    }
  }
}

export { Test, constants };