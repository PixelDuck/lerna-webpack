"use strict";

console.info('index.js from core was loaded!');

function isMyLernaLibraryAnotherPackageDefined() {
  return typeof myLernaLibraryAnotherPackage !== 'undefined';
}

require('@my-lerna-library/common');
const constants = myLernaLibraryCommon.constants;
const { magicNumber } = constants

class Test {
  constructor() {
    this.modules = {};
  }

  test() {
    return `hello from main endpoint ${magicNumber}`;
  }
  
  testFromAnotherPackage() {
    if (isMyLernaLibraryAnotherPackageDefined())
      return new myLernaLibraryAnotherPackage.AnotherClass().test();
  }

  iconFromAnotherPackage() {
    if (isMyLernaLibraryAnotherPackageDefined())
      return myLernaLibraryAnotherPackage.logo;
  }
  
  bigSVGFromAnotherPackage() {
    if (isMyLernaLibraryAnotherPackageDefined())
      return myLernaLibraryAnotherPackage.bigSVG;
  }
}

export { Test, constants };