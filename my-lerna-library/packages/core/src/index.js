"use strict";

import * as constants from './constants.js';

const { magicNumber } = constants;

console.info('index.js from core was loaded!');

let anotherPackage = undefined;

function fromAnotherPackage() {
  console.info("fromAnotherPackage")
  if (anotherPackage === undefined) {
    try {
      anotherPackage = require('@my-lerna-library/another-package');
    } catch(error) {
      anotherPackage = null;
      console.error(error);
    }
  }
  return anotherPackage;
}

class Test {
  constructor() {
  }
  test() {
    return `hello from main endpoint ${magicNumber}`;
  }
  testFromAnotherPackage() {
    console.info("call to testFromAnotherPackage");
    const AnotherClass = fromAnotherPackage()?.AnotherClass;
    if (AnotherClass) {
      return new AnotherClass().test();
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